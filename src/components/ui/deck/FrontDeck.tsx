import * as S from "./frontDeckStyle";

export default function FrontDeck({
  value,
  color,
  myHighlight,
}: IFrontDeckProps) {
  const underBar = value === 6 || value === 9;

  return (
    <S.cardDeck color={color} myHighlight={myHighlight}>
      <S.number color={color} underBar={underBar}>
        {value === -1 ? "-" : value}
      </S.number>
    </S.cardDeck>
  );
}
