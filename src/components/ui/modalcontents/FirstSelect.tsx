import DeckChoice from "../DeckChoice/DeckChoice";
import * as S from "./firstSelectStyle";
export default function FirstSelect() {
  return (
    <S.container>
      <S.title>처음 가져올 타이틀 조합을 선택해주세요.</S.title>
      <S.deckContainer>
        <DeckChoice whiteCount={4} blackCount={0} />
        <DeckChoice whiteCount={3} blackCount={1} />
        <DeckChoice whiteCount={2} blackCount={2} />
        <DeckChoice whiteCount={1} blackCount={3} />
        <DeckChoice whiteCount={0} blackCount={4} />
      </S.deckContainer>
    </S.container>
  );
}
