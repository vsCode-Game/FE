import Header from "@components/layout/header/Header";
import GameRoomHeader from "@components/layout/gameRoomHeader/GameRoomHeader";
import Footer from "@components/layout/footer/Footer";
import Modal from "@components/ui/modal/Modal";
import Toast from "@components/ui/toast/Toast";
import { Outlet, useLocation } from "react-router-dom";
import { Wrapper, Container } from "./LayoutStyle";
import { useModalStore } from "@store/useModalStore";

const GAME_ROOM = "/game/room/";
const HIDDEN_HEADER_FOOTER = "/home";

export default function Layout() {
  const { showModal } = useModalStore();
  const location = useLocation();
  const pathname = location.pathname;
  const isGameRoom = pathname.includes(GAME_ROOM);
  const isHiddenHeaderFooter = pathname.includes(HIDDEN_HEADER_FOOTER);

  return (
    <>
      <Wrapper>
        {isHiddenHeaderFooter ? (
          ""
        ) : !isGameRoom ? (
          <Header />
        ) : (
          <GameRoomHeader />
        )}
        <Container>
          <Outlet />
        </Container>
        {!isHiddenHeaderFooter && <Footer />}
      </Wrapper>

      <Toast />
      {showModal && <Modal />}
    </>
  );
}
