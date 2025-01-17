import { IGameRoom } from "../../../../api/gameRoomApi";
import { useJoinGameRoomMutation } from "../../../../hooks/useMutation";
import Badge from "../../badge/Badge";
import Button from "../../button/Button";
import * as S from "./GameRoomCardStyle";

export default function GameRoomCard({ room }: { room: IGameRoom }) {
  const disabled = room.currentCount === 2 ? true : false;
  const mutation = useJoinGameRoomMutation();
  const onClickJoin = (roomId: number) => {
    mutation.mutate(roomId);
  };

  const roomState = () => {
    if (room.currentCount === 1) {
      return "waiting...";
    } else if (room.currentCount === 2) {
      return "playing";
    }
  };
  return (
    <S.cardContainer>
      <Badge playerNumber={room.currentCount} status={roomState()} />
      <S.titleBox>{room.roomName}</S.titleBox>
      <S.buttonContainer>
        <Button
          type="button"
          size="md"
          bgcolor="blue"
          textcolor="black"
          width="150px"
          disabled={disabled}
          playerNumber={room.currentCount}
          onClick={() => onClickJoin(room.id)}
        >
          참여하기
        </Button>
      </S.buttonContainer>
    </S.cardContainer>
  );
}
