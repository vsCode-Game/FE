import MiniDeck from "../MiniDeck";
import { DeckContainer } from "./deckChoiceStyle";

export default function DeckChoice({
  whiteCount,
  blackCount,
}: IDeckChoiceProps) {
  const deckArray = [
    ...Array(whiteCount).fill("white"),
    ...Array(blackCount).fill("black"),
  ];
  return (
    <DeckContainer>
      {deckArray.map((color, index) => (
        <MiniDeck key={index} color={color} />
      ))}
    </DeckContainer>
  );
}
