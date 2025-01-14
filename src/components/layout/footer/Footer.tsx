import { useLocation } from "react-router-dom";
import { StyledFooter } from "./FooterStyle";

const GAME_ROOM = "/game/room/";

export default function Footer() {
  const location = useLocation();
  const pathname = location.pathname;
  const isGameRoom = pathname.includes(GAME_ROOM);

  return (
    <>
      <StyledFooter isGameRoom={isGameRoom}>
        <p>@ 2024 Codename Davinci</p>
      </StyledFooter>
    </>
  );
}
