import { AxiosError } from "axios";
import { authInstance, instance } from "./axios";

export interface IGameRoom {
  id: number;
  roomName: string;
  maxPlayers: number;
  currentCount: number;
  createdAt: string;
}

export interface IRoomUser {
  id: number;
  roomId: number;
  userId: number;
  joinedAt: string;
}

export interface ICreateGameRoomResponse {
  room: IGameRoom;
  user: IRoomUser;
}

export const getGameRoomsList = async () => {
  try {
    const { data } = await instance.get("/gameRoom");
    return data;
  } catch (error) {
    const axiosError = error as AxiosError<unknown>;

    if (axiosError.response) {
      return axiosError.response.data;
    }
  }
};

export const getGameRoomInfo = async (roomId: number) => {
  try {
    const response = await authInstance.get(`/gameRoom/${roomId}`);
    console.log(response.data, "액시오스 리스폰스");
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<unknown>;

    if (axiosError.response) {
      return axiosError.response.data;
    }
  }
};

export const createGameRoom = async ({
  roomName,
}: {
  roomName: string;
}): Promise<ICreateGameRoomResponse> => {
  try {
    const response = await authInstance.post<ICreateGameRoomResponse>(
      "gameRoom/create",
      { roomName },
      {
        headers: { Authorization: localStorage.getItem("accessToken") },
      },
    );

    const createRoom = response.data.room;
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;

    if (
      axiosError.response &&
      axiosError.response.data &&
      axiosError.response.data.message
    ) {
      throw new Error(axiosError.response.data.message);
    } else {
      throw new Error("게임 방 생성 중 예상치 못한 오류가 발생했습니다.");
    }
  }
};

export const joinGameRoom = async (gameRoomId: number) => {
  try {
    const response = await authInstance.post(`/gameRoom/join/${gameRoomId}`);

    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 400) {
      console.log(response);
      throw response;
    }
  } catch (error: any) {
    throw error.response.data;
  }
};

export const outGameRoom = async (gameRoomId: number) => {
  try {
    console.log(gameRoomId, "gameRoomId확인");
    const response = await authInstance.delete(`gameRoom/leave/${gameRoomId}`);
    console.log(response, "outresponse확인");
    if (response.status === 200) {
      return response.data;
    }
    if (response.status === 400) {
      console.log(response);
      throw response;
    }
  } catch (error: any) {
    throw error.response.data;
  }
};
