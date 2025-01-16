import Button from "../../components/ui/button/Button";
import * as S from "./gameRoomListStyle";
import GameRoomCard from "../../components/ui/card/cardList/GameRoomCard";
import iconPlus from "@assets/images/icon_plus.svg";
import { useGetGameRoomList } from "../../hooks/useQuery";
import { useModal } from "../../hooks/useModal";

interface IGameRoom {
  id: number;
  roomName: string;
  maxPlayers: number;
  currentCount: number;
  createdAt: string;
}

export default function GameRoomList() {
  const { openModal } = useModal();
  const { data: gameRooms } = useGetGameRoomList();
  console.log("gameRooms✅", gameRooms);

  const onClickModalOpen = () => {
    openModal("makeRoom", "white");
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
          onClick={onClickModalOpen}
        >
          <img src={iconPlus} alt="더하기 아이콘" />

          <S.buttonText>방 만들기</S.buttonText>
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
