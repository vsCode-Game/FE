import ModalPortal from "./ModalPortal";
import FirstSelect from "../modalContents/FirstSelect";
import MakeRoom from "../modalContents/MakeRoom";
import BigDeck from "../bigDeck/BigDeck";
import TurnWaiting from "../modalContents/TurnWaiting";
import GameWaiting from "../modalContents/GameWaiting";
import { useModalStore } from "../../../store/useModalStore";
import { Inside, ModalFrame, Overlay } from "./modalStyle";
import { useEffect } from "react";
import { useModal } from "@hooks/useModal";

const modalComponents: Record<string, React.ReactNode> = {
  firstSelect: <FirstSelect />,
  makeRoom: <MakeRoom />,
  selectWhiteBlack: <BigDeck />,
  turnWaiting: <TurnWaiting />,
  gameWaiting: <GameWaiting />,
};

export default function Modal() {
  const { showModal, currentModal, modalColor } = useModalStore();
  const { closeModal } = useModal();

  if (!showModal) return null;

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  useEffect(() => {
    const onKeydownEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", onKeydownEscape);

    return () => {
      document.removeEventListener("keydown", onKeydownEscape);
    };
  }, [closeModal]);

  return (
    <ModalPortal>
      <ModalFrame onClick={closeModal}>
        {modalColor === "white" ? (
          <Overlay onClick={closeModal}>
            <Inside onClick={(e) => e.stopPropagation()} styleKey={modalColor}>
              {currentModal ? modalComponents[currentModal] : null}
            </Inside>
          </Overlay>
        ) : (
          <Inside
            onClick={(e) => e.stopPropagation()}
            styleKey={modalColor as "white" | "blue"}
          >
            {currentModal ? modalComponents[currentModal] : null}
          </Inside>
        )}
      </ModalFrame>
    </ModalPortal>
  );
}
