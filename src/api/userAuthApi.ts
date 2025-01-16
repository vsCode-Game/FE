import { authInstance, instance } from "./axios";
import { AxiosError } from "axios";

export interface ILoginResponse {
  accessToken: string;
}

export interface IErrorResponse {
  status: number;
  message: string;
}

export interface ISignUpVariables {
  userEmail: string;
  password: string;
  userNickname: string;
}

export interface ISignUpResponse {
  userEmail: string;
  password: string;
  userNickname: string;
}

export const loginUser = async (logInfo: {
  userEmail: string;
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
    const response = await authInstance.post("/auth/refresh");
    console.log(response);
    const { accessToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.log(error);
  }
};

export const signUpUser = async (
  variables: ISignUpVariables,
): Promise<ISignUpResponse> => {
  try {
    const response = await instance.post("/user/signup", variables, {
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("회원가입에 실패했습니다.");
  }
};
