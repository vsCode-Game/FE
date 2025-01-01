import * as S from "./DeckStyle";

export default function Deck({ value, color }: IWhiteDeckProps) {
  const underBar = value === "6" || value === "9";
  return (
    <S.cardDeck color={color}>
      <S.number color={color} underBar={underBar}>
        {value}
      </S.number>
    </S.cardDeck>
  );
}
