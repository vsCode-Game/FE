import * as S from "./bigDeckStyle";

export default function BigDeck() {
  // onClick함수 나중에 로직에 따라 만들기
  return (
    <S.container>
      <S.title>가져올 카드의 색을 선택해 주세요.</S.title>
      <S.bigDeckContainer>
        <S.bigDeckButton type="button" themeType="light"></S.bigDeckButton>
        <S.bigDeckButton type="button" themeType="black"></S.bigDeckButton>
      </S.bigDeckContainer>
    </S.container>
  );
}
