// useModal.ts
import { useModalStore } from "../store/useModalStore";

export const useModal = () => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const currentModal = useModalStore((state) => state.currentModal);
  const modalColor = useModalStore((state) => state.modalColor);

  return { openModal, closeModal, currentModal, modalColor };
};
