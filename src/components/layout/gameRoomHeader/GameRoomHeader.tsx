import { NavLink } from "react-router-dom";
import { Logo, StyledHeader } from "./GameRoomHeaderStyle";

export default function GameRoomHeader() {
  return (
    <>
      <StyledHeader>
        <Logo>
          <NavLink to="/">나가기 </NavLink>
        </Logo>
      </StyledHeader>
    </>
  );
}
