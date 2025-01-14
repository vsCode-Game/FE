import { useJoinRoomMutation } from "../../../../hooks/useMutation";
import Badge from "../../badge/Badge";
import Button from "../../button/Button";
import * as S from "./GameRoomCardStyle";

export default function GameRoomCard({ room }: { room: IRoomProps }) {
  const disabled = room.currentCount === 2 ? true : false;
  const mutation = useJoinRoomMutation();
  const onClickJoin = (roomId: number) => {
    mutation.mutate(roomId);
  };
  return (
    <S.cardContainer>
      <Badge playerNumber={room.currentCount} />
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
