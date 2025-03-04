import * as S from "./ChattingStyle";
import ChatInputBox from "../../chatInput/ChatInputBox";

export default function ChattingBox({ socket }: { socket: any }) {
  return (
    <S.chat>
      <S.chatInputBoxContainer>
        <ChatInputBox socket={socket} />
      </S.chatInputBoxContainer>
    </S.chat>
  );
}
