import Badge from "../../badge/Badge";
import Button from "../../button/Button";
import * as S from "./GameRoomCardStyle";

export default function GameRoomCard({ room }: { room: IRoomProps }) {
  const disabled = room.currentCount === 2 ? true : false;
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
        >
          참여하기
        </Button>
      </S.buttonContainer>
    </S.cardContainer>
  );
}
