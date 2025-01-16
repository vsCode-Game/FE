import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  createGameRoom,
  ICreateGameRoomResponse,
  joinGameRoom,
  outGameRoom,
} from "../api/gameRoomApi";
import {
  ILoginResponse,
  ISignUpResponse,
  ISignUpVariables,
  loginUser,
  signUpUser,
} from "../api/userAuthApi";

export const useCreateRoomMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<ICreateGameRoomResponse, Error, { roomName: string }>({
    mutationFn: createGameRoom,
    onSuccess: (data) => {
      navigate(`/game/room/${data.room.id}`);
      queryClient.invalidateQueries({
        queryKey: ["gameRoomList"],
      });
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export const useJoinGameRoomMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: joinGameRoom,
    onSuccess: (data, roomNumber: number) => {
      console.log("성공", data);
      navigate(`/game/room/${roomNumber}`);
    },
    onError: (error: any) => {
      if (error.status === 500) {
        alert("존재하지 않는 게임방입니다.");
      } else {
        alert(error.message);
      }
    },
  });
};

export const useOutRoomMutaion = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: outGameRoom,
    onSuccess: (data) => {
      console.log("방나가기 성공", data);
      navigate(`/game`);
      queryClient.invalidateQueries({
        queryKey: ["gameRoomList"],
      });
    },

    onError: (error: any) => {
      if (error.status === 400) {
        alert("유저가 게임방에 없습니다.");
      } else if (error.status === 404) {
        alert("방을 찾을 수 없습니다.");
      } else {
        alert(error.message);
      }
    },
  });
};

export const useLoginSubmitMutation = () => {
  const navigate = useNavigate();
  return useMutation<
    ILoginResponse,
    Error,
    { userEmail: string; password: string }
  >({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const accessToken = data?.accessToken;
      localStorage.setItem("accessToken", accessToken);
      navigate(`/game`);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export const useSignUpSubmitMutation = () => {
  return useMutation<ISignUpResponse, Error, ISignUpVariables>({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
};
