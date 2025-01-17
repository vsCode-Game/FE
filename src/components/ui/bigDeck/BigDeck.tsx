import { useParams } from "react-router-dom";
import { useSocketStore } from "../../../store/useSocketStore";
import * as S from "./bigDeckStyle";
import { useModal } from "../../../hooks/useModal";

interface IBigDeck {
  roomId: number;
  color: "white" | "black";
}
export default function BigDeck() {
  const { socket } = useSocketStore();
  const params = useParams();
  const roomId = Number(params.id);
  const { closeModal } = useModal();

  const onClickBigDeck = ({ roomId, color }: IBigDeck) => {
    if (!socket) return;
    socket.emit("drawCard", { roomId, color });
    closeModal();
  };

  return (
    <S.container>
      <S.title>가져올 카드의 색을 선택해 주세요.</S.title>
      <S.bigDeckContainer>
        <S.bigDeckButton
          type="button"
          themeType="light"
          onClick={() => onClickBigDeck({ roomId, color: "white" })}
        ></S.bigDeckButton>
        <S.bigDeckButton
          type="button"
          themeType="black"
          onClick={() => onClickBigDeck({ roomId, color: "black" })}
        ></S.bigDeckButton>
      </S.bigDeckContainer>
    </S.container>
  );
}
