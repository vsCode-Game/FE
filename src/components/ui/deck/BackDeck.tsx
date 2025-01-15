import iconArrow from "@assets/images/icon_arrow_right.svg";
import * as S from "./backDeckStyle";

export default function BackDeck({ value, color }: IWhiteDeckProps) {
  const number = value;
  console.log(number);
  return (
    <S.cardDeck color={color}>
      <S.img src={iconArrow} alt="arrow" color={color} />
    </S.cardDeck>
  );
}
