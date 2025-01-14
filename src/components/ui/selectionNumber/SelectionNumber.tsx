import Button from "../button/Button";
import * as S from "./selectionNumberStyle";

export default function SelectionNumber() {
  const numbersRow1 = [...Array.from({ length: 6 }, (_, index) => index)];
  const numbersRow2 = ["-"];
  const numbersRow3 = [...Array.from({ length: 6 }, (_, index) => index + 6)];

  return (
    <S.Wrapper>
      <S.NumberWrapper>
        <S.NumberBox>
          <S.Number>
            {numbersRow1.map((number, index) => (
              <S.NumberDetail key={`row1-${index}`}>{number}</S.NumberDetail>
            ))}
          </S.Number>
          <S.Number>
            {numbersRow3.map((number, index) => (
              <S.NumberDetail key={`row3-${index}`}>{number}</S.NumberDetail>
            ))}
          </S.Number>
        </S.NumberBox>

        <S.DashBox>
          {numbersRow2.map((symbol, index) => (
            <S.NumberDetail key={`row2-${index}`}>{symbol}</S.NumberDetail>
          ))}
        </S.DashBox>
      </S.NumberWrapper>
      <S.ButtonWrapper>
        <Button
          type="button"
          size="md"
          bgcolor="green"
          textcolor="black"
          width="160px"
        >
          숫자 선택
        </Button>
      </S.ButtonWrapper>
      <S.FooterWrapper>
        <S.Footer></S.Footer>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
