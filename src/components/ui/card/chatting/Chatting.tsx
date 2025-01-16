import ChatInputBox from "../../chatInput/ChatInputBox";
import * as S from "./ChattingStyle";
export default function ChattingBox() {
  return (
    <S.chat>
      <S.chatInputBoxContainer>
        <ChatInputBox />
      </S.chatInputBoxContainer>
    </S.chat>
  );
}
