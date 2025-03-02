import ModalPortal from "./ModalPortal";
import { useModalStore } from "../../../store/useModalStore";
import { Inside, ModalFrame, Overlay } from "./modalStyle";
import { useEffect, useCallback, useRef } from "react";
import { useModal } from "@hooks/useModal";
import { modalComponents } from "./modalComponent";

export default function Modal() {
  const { showModal, currentModal, modalColor } = useModalStore();
  const { closeModal } = useModal();
  const scrollYRef = useRef(0);

  if (!showModal || !currentModal) return null;

  useEffect(() => {
    scrollYRef.current = window.scrollY;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      window.scrollTo(0, scrollYRef.current);
    };
  }, []);

  const onKeydownEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    },
    [closeModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeydownEscape);

    return () => {
      document.removeEventListener("keydown", onKeydownEscape);
    };
  }, [onKeydownEscape]);

  return (
    <ModalPortal>
      <ModalFrame onClick={closeModal}>
        <Overlay modalColor={modalColor}>
          <Inside
            onClick={(e) => e.stopPropagation()}
            styleKey={modalColor as "white" | "blue"}
          >
            {modalComponents[currentModal]}
          </Inside>
        </Overlay>
      </ModalFrame>
    </ModalPortal>
  );
}
