import iconExit from "@assets/images/icon_close.svg";
import { NavLink, useParams } from "react-router-dom";
import { Flex, StyledHeader, TextButton } from "./GameRoomHeaderStyle";
import { useOutRoomMutaion } from "../../../hooks/useMutation";

export default function GameRoomHeader() {
  const params = useParams();
  const roomId = Number(params.id);
  const mutation = useOutRoomMutaion();

  const onClickOut = (roomId: number) => {
    mutation.mutate(roomId);
    console.log("방나가기 성공asdfasdf");
  };
  return (
    <>
      <StyledHeader>
        <NavLink to="/">
          <Flex onClick={() => onClickOut(roomId)}>
            <img src={iconExit} alt="게임방 나가기" />
            <TextButton>나가기</TextButton>
          </Flex>
        </NavLink>
      </StyledHeader>
    </>
  );
}
