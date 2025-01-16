import ModalPortal from "./ModalPortal";
import FirstSelect from "../modalContents/FirstSelect";
import MakeRoom from "../modalContents/MakeRoom";
import { useModalStore } from "../../../store/useModalStore";
import { Inside, ModalFrame, Overlay } from "./modalStyle";
import BigDeck from "../bigDeck/BigDeck";
import GuessNumber from "../selectionNumber/GuessNumber";

const modalComponents: Record<string, React.ReactNode> = {
  firstSelect: <FirstSelect />,
  makeRoom: <MakeRoom />,
  myTurn: <BigDeck />,
  guessNumber: <GuessNumber />,
};

export default function Modal() {
  const { showModal, currentModal, modalColor } = useModalStore();

  if (!showModal) return null;

  return (
    <ModalPortal>
      <ModalFrame>
        {modalColor === "white" ? (
          <Overlay>
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
