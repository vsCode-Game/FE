import { authInstance, instance } from "./axios";
import { AxiosError } from "axios";

export interface ILoginResponse {
  accessToken: string;
}

export interface IErrorResponse {
  status: number;
  message: string;
}

export const loginUser = async (logInfo: {
  email: string;
  password: string;
}): Promise<ILoginResponse> => {
  try {
    console.log(instance, "인스턴스확인");
    const response = await instance.post<ILoginResponse>(
      "/auth/login",
      logInfo,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log(response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<IErrorResponse>;
    if (axiosError.response) {
      console.log(axiosError.response.data.status);
      throw new Error(axiosError.response.data.message); // 에러 메시지 던지기
    } else {
      throw new Error("로그인 중 예상치 못한 오류가 발생했습니다.");
    }
  }
};

export const refreshToken = async () => {
  try {
    const response = await authInstance.post("/auth/refresh", {
      withCredentials: true,
    });
    console.log(response);
    const accessToken = response?.headers.authorization;

    localStorage.setItem("accessToken", accessToken);
    return response.data.accessToken;
  } catch (err) {
    console.log(err);
  }
};
