import { useQuery } from "@tanstack/react-query";
import Button from "../../components/ui/button/Button";
import * as S from "./gameRoomListStyle";
import GameRoomCard from "../../components/ui/card/cardList/GameRoomCard";
import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL: "https://api.davincicodegame.store",
});

interface IGameRoom {
  id: number;
  roomName: string;
  maxPlayers: number;
  currentCount: number;
  createdAt: string;
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

export const useGetGameRooms = () => {
  return useQuery({
    queryKey: ["gameRoomsList"],
    queryFn: getGameRoomsList,
  });
};

export default function GameRoomList() {
  const { data: gameRooms } = useGetGameRooms();
  console.log("gameRooms✅", gameRooms);

  return (
    <S.container>
      <S.buttonContainer>
        <Button
          type="button"
          size="l"
          bgcolor="green"
          textcolor="black"
          width="180px"
        >
          + 방만들기
        </Button>
      </S.buttonContainer>
      <S.gameroomListContainer>
        {gameRooms?.map((room: IGameRoom) => (
          <GameRoomCard key={room.id} room={room} />
        ))}
      </S.gameroomListContainer>
    </S.container>
  );
}
