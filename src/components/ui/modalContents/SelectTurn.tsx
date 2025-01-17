import Button from "../button/Button";
import * as S from "./selectTurnStyle";

export default function SelectTurn() {
  //버튼에 onClick이벤트 만들면 됩니다.
  return (
    <S.container>
      <S.title>턴 종료 No, 계속 맞출거면 Yes</S.title>
      <S.buttonContainer>
        <Button type="button" size="l" bgcolor="black" textcolor="white">
          No
        </Button>
        <Button type="button" size="l" bgcolor="green" textcolor="black">
          Yes
        </Button>
      </S.buttonContainer>
    </S.container>
  );
}
