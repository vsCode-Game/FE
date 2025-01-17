import { useParams } from "react-router-dom";
import * as S from "./numberButtonStyle";
import { useSocketStore } from "../../../store/useSocketStore";
import { useCardIndexStore } from "../../../store/useGuessNumberStore";
import { useModal } from "../../../hooks/useModal";

export default function NumberButton({ value }: { value: number }) {
  const params = useParams();
  const roomId = Number(params.id);
  const { socket } = useSocketStore();
  const { cardIndex } = useCardIndexStore();

  const { closeModal } = useModal();
  const onClickNumber = () => {
    if (!socket) return;
    console.log(
      `방 ID: ${roomId}, 카드 인덱스: ${cardIndex}, 선택된 번호: ${value}`,
    );
    socket.emit("guessCard", { roomId, cardIndex, cardNumber: value });

    closeModal();
  };
  return (
    <S.numberButton onClick={onClickNumber}>
      {value === -1 ? "-" : value}
    </S.numberButton>
  );
}
