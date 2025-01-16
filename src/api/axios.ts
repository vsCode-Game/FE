import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

authInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = token; // "Bearer ..." 형태로 저장돼 있다면 그대로 사용
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

authInstance.interceptors.response.use(
  (response) => {
    // 성공 응답은 그대로 반환
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 401 && 아직 재시도 안했을 경우
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        // Refresh Token으로 새 Access Token 발급
        const refreshResponse = await authInstance.post("/auth/refresh");
        const { accessToken } = refreshResponse.data;

        // 로컬스토리지에 다시 저장
        localStorage.setItem("accessToken", accessToken);

        // 원래 요청 헤더에 갱신된 토큰 반영
        originalRequest.headers.Authorization = accessToken;

        // 원래 요청 재시도
        return authInstance(originalRequest);
      } catch (refreshError) {
        // 재발급 실패: 로그인 페이지로 이동 등 처리
        // localStorage.clear() 또는 특정 에러 처리
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
