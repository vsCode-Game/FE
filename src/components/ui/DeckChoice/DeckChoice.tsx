import MiniDeck from "../miniDeck/MiniDeck";
import * as S from "./deckChoiceStyle";

export default function DeckChoice({
  whiteCount,
  blackCount,
}: IDeckChoiceProps) {
  const deckArray = [
    ...Array(whiteCount).fill("white"),
    ...Array(blackCount).fill("black"),
  ];

  return (
    <S.DeckContainer>
      {deckArray.map((color, index) => (
        <MiniDeck key={index} color={color} />
      ))}
    </S.DeckContainer>
  );
}
