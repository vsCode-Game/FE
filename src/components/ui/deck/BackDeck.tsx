import backDeck from "@assets/images/icon_backDeck.svg";
import * as S from "./backDeckStyle";
import { useModal } from "../../../hooks/useModal";
import { useCardIndexStore } from "../../../store/useGuessNumberStore";

interface IBackDeckProps {
  isFlipped: boolean;
  color: string;
  cardIndex: number;
  myHighlight?: boolean;
  disabled: boolean;
}

export default function BackDeck({
  // isFlipped,

  color,
  disabled,
  myHighlight,
  cardIndex,
}: IBackDeckProps) {
  const { openModal } = useModal();
  const { setCardIndex } = useCardIndexStore();
  console.log(cardIndex, "카드인덱스 확인");
  const onClicBackDeck = () => {
    setCardIndex(cardIndex);
    openModal("guessNumber", "blue");
  };
  return (
    <S.cardDeck
      color={color}
      myHighlight={myHighlight}
      disabled={disabled}
      onClick={onClicBackDeck}
    >
      <S.img src={backDeck} alt="arrow" color={color} />
    </S.cardDeck>
  );
}
