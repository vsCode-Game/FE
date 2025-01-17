import * as S from "./frontDeckStyle";

export default function FrontDeck({
  value,
  color,
  myHighlight,
  isFlipped,
}: IFrontDeckProps) {
  const underBar = value === 6 || value === 9;

  return (
    <S.cardDeck color={color} myHighlight={myHighlight} isFlipped={isFlipped}>
      <S.number color={color} underBar={underBar}>
        {value === -1 ? "-" : value}
      </S.number>
    </S.cardDeck>
  );
}
