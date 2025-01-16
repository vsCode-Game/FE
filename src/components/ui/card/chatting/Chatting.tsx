import ChatInputBox from "../../chatInput/ChatInputBox";
import * as S from "./ChattingStyle";
// import { Socket } from "socket.io-client";

// export interface IChattingProps {
//   socket: Socket | null;
// }

export default function ChattingBox() {
  return (
    <S.chat>
      <S.chatInputBoxContainer>
        <ChatInputBox />
      </S.chatInputBoxContainer>
    </S.chat>
  );
}
