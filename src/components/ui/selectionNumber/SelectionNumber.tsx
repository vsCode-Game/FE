import Button from "../button/Button";
import {
  NumberDetail,
  Number,
  Wrapper,
  NumberWrapper,
  ButtonWrapper,
  DashBox,
  NumberBox,
  Footer,
  FooterWrapper,
} from "./selectionNumberStyle";

export default function SelectionNumber() {
  const numbersRow1 = [...Array.from({ length: 6 }, (_, index) => index)];
  const numbersRow2 = ["-"];
  const numbersRow3 = [...Array.from({ length: 6 }, (_, index) => index + 6)];

  return (
    <Wrapper>
      <NumberWrapper>
        <NumberBox>
          <Number>
            {numbersRow1.map((number, index) => (
              <NumberDetail key={`row1-${index}`}>{number}</NumberDetail>
            ))}
          </Number>
          <Number>
            {numbersRow3.map((number, index) => (
              <NumberDetail key={`row3-${index}`}>{number}</NumberDetail>
            ))}
          </Number>
        </NumberBox>

        <DashBox>
          {numbersRow2.map((symbol, index) => (
            <NumberDetail key={`row2-${index}`}>{symbol}</NumberDetail>
          ))}
        </DashBox>
      </NumberWrapper>
      <ButtonWrapper>
        <Button
          type="button"
          size="md"
          bgcolor="green"
          textcolor="black"
          width="160px"
        >
          숫자 선택
        </Button>
      </ButtonWrapper>
      <FooterWrapper>
        <Footer></Footer>
      </FooterWrapper>
    </Wrapper>
  );
}
