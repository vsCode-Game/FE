import Button from "../button/Button";
import * as S from "./chatInputStyle";
// import { IChattingProps } from "../card/chatting/Chatting";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

export default function ChatInputBox() {
  //   const [message, setMessage] = useState("");
  //   const params = useParams();
  //   const roomId = Number(params.id);

  //   useEffect(() => {
  //     setMessage("");
  //   }, []);

  //   console.log(socket);

  //   const onClickSendMessage = () => {
  //     if (!socket) {
  //       console.log("방에 연결할 수 없습니다.");
  //       return;
  //     }
  //     socket.emit("message", { roomId: roomId, message }, (res: any) => {
  //       console.log(`Message sent: ${JSON.stringify(res)}`);
  //     });
  //   };

  return (
    <S.chatInputBox>
      <S.chatInput
        type="text"
        placeholder="상대방과 채팅을 나눌 수 있습니다."
        // value={message}
      ></S.chatInput>
      <S.buttonBox>
        <Button
          size="xs"
          bgcolor="green"
          textcolor="black"
          type="button"
          //   onClick={onClickSendMessage}
        >
          전송
        </Button>
      </S.buttonBox>
    </S.chatInputBox>
  );
}
