import iconArrow from "@assets/images/icon_arrow_right.svg";
import * as S from "./backDeckStyle";

export default function BackDeck({ value, color }: IWhiteDeckProps) {
  return (
    <S.cardDeck color={color}>
      <S.img src={iconArrow} alt="arrow" color={color} />
    </S.cardDeck>
  );
}
