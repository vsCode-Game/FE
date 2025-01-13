import iconExit from "@assets/images/icon_close.svg";
import { NavLink } from "react-router-dom";
import { Flex, StyledHeader, TextButton } from "./GameRoomHeaderStyle";

export default function GameRoomHeader() {
  return (
    <>
      <StyledHeader>
        <NavLink to="/">
          <Flex>
            <img src={iconExit} alt="게임방 나가기" />
            <TextButton>나가기</TextButton>
          </Flex>
        </NavLink>
      </StyledHeader>
    </>
  );
}
