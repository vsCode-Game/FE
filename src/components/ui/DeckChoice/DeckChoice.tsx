import { useParams } from "react-router-dom";
import { useSocketStore } from "../../../store/useSocketStore";
import MiniDeck from "../miniDeck/MiniDeck";
import * as S from "./deckChoiceStyle";
import { useModal } from "../../../hooks/useModal";

interface IInitialCards {
  roomId: number;
  blackCount: number;
  whiteCount: number;
}

interface IDeckChoiceProps {
  whiteCount: number;
  blackCount: number;
}

export default function DeckChoice({
  whiteCount,
  blackCount,
}: IDeckChoiceProps) {
  const deckArray = [
    ...Array(whiteCount).fill("white"),
    ...Array(blackCount).fill("black"),
  ];

  const { socket } = useSocketStore();
  const params = useParams<{ id: string }>();
  const roomId = Number(params.id);
  const { closeModal } = useModal();

  const onClickDeck = ({ roomId, whiteCount, blackCount }: IInitialCards) => {
    if (!socket) {
      return;
    }
    console.log(roomId, whiteCount, blackCount, "룸아이디, 와이트덱, 블랙덱");
    socket.emit("initialCards", { roomId, whiteCount, blackCount });
    closeModal();
  };

  return (
    <S.DeckContainer
      onClick={() => onClickDeck({ roomId, whiteCount, blackCount })}
    >
      {deckArray.map((color, index) => (
        <MiniDeck key={index} color={color} />
      ))}
    </S.DeckContainer>
  );
}
