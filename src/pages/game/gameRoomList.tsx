import Button from "../../components/ui/button/Button";
import * as S from "./gameRoomListStyle";
import GameRoomCard from "../../components/ui/card/cardList/GameRoomCard";
import { useGetGameRoomList } from "../../hooks/useQuery";
import { useNavigate } from "react-router-dom";

interface IGameRoom {
  id: number;
  roomName: string;
  maxPlayers: number;
  currentCount: number;
  createdAt: string;
}

export default function GameRoomList() {
  const { data: gameRooms } = useGetGameRoomList();
  console.log("gameRooms✅", gameRooms);
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/test");
  };
  return (
    <S.container>
      <S.buttonContainer>
        <Button
          type="button"
          size="l"
          bgcolor="green"
          textcolor="black"
          width="180px"
          onClick={onClickButton}
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
