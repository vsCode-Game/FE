import Button from "../button/Button";
import * as S from "./chatInputStyle";

export default function ChatInputBox() {
  return (
    <S.chatInputBox>
      <S.chatInput
        type="text"
        placeholder="상대방과 채팅을 나눌 수 있습니다."
      ></S.chatInput>
      <S.buttonBox>
        <Button size="xs" bgcolor="green" textcolor="black" type="button">
          전송
        </Button>
      </S.buttonBox>
    </S.chatInputBox>
  );
}
