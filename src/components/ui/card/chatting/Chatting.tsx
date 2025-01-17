import * as S from "./ChattingStyle";
import ChatInputBox from "../../chatInput/ChatInputBox";

export default function ChattingBox() {
  return (
    <S.chat>
      <S.chatInputBoxContainer>
        <ChatInputBox />
      </S.chatInputBoxContainer>
    </S.chat>
  );
}
