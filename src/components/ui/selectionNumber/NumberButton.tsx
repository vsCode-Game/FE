import { useParams } from "react-router-dom";
import * as S from "./numberButtonStyle";
import { useSocketStore } from "../../../store/useSocketStore";
import { useCradIndexStore } from "../../../store/useGuessNumberStore";

export default function NumberButton({ value }: { value: number }) {
  const params = useParams();
  const roomId = Number(params.id);
  const { socket } = useSocketStore();
  const { cardIndex } = useCradIndexStore();
  const onClickNumber = () => {
    if (!socket) return;
    socket.emit("guessCard", { roomId, cardIndex, CardNumber: value });
  };
  return (
    <S.numberButton onClick={onClickNumber}>
      {value === -1 ? "-" : value}
    </S.numberButton>
  );
}
