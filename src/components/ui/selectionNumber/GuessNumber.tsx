import * as S from "./guessNumberStyle";
import NumberButton from "./NumberButton";

export default function GuessNumber() {
  const numbers = Array.from({ length: 12 }, (_, index) => index);

  return (
    <S.container>
      <S.title>상대 덱의 번호를 추측해주세요.</S.title>
      <S.numberContainer>
        <S.leftContainer>
          {numbers.map((num) => (
            <NumberButton value={num} />
          ))}
        </S.leftContainer>
        <S.rightContaider>
          <NumberButton value={-1} />
        </S.rightContaider>
      </S.numberContainer>
    </S.container>
  );
}
