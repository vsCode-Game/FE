import { instance } from "./axios";

export const loginUser = async (logInfo: {
  email: string;
  password: string;
}) => {
  const response = instance.post("/auth/login", logInfo, {
    withCredentials: true, // 쿠키를 포함시키기 위해 withCredentials 옵션을 true로 설정합니다.
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
};
