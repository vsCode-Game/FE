import iconExit from "@assets/images/icon_close.svg";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Flex, StyledHeader, TextButton } from "./GameRoomHeaderStyle";

import { useSocketStore } from "../../../store/useSocketStore";

export default function GameRoomHeader() {
  const params = useParams();
  const roomId = Number(params.id);
  const navigate = useNavigate();
  const { socket } = useSocketStore();
  const onClickOut = async (roomId: number) => {
    if (!socket) {
      return;
    }
    socket.emit("leaveRoom", { roomId });
    navigate("/game");
  };

  return (
    <>
      <StyledHeader>
        <Flex onClick={() => onClickOut(roomId)}>
          <img src={iconExit} alt="게임방 나가기" />
          <TextButton>나가기</TextButton>
        </Flex>
      </StyledHeader>
    </>
  );
}
