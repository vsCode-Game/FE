import { useModalStore } from "../../../store/useModalStore";
import ModalPortal from "./ModalPortal";
import SelectDeckModal from "./SelectDeckModal";
import { Inside, ModalFrame, Overlay } from "./modalStyle";

const modalComponents: Record<string, React.ReactNode> = {
  selectDeck: <SelectDeckModal />,
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
          <Inside onClick={(e) => e.stopPropagation()} styleKey={modalColor}>
            {currentModal ? modalComponents[currentModal] : null}
          </Inside>
        )}
      </ModalFrame>
    </ModalPortal>
  );
}
