import { create } from "zustand";

type ModalState = {
  showModal: boolean;
  currentModal: string | null;
  modalColor: string;
  openModal: (modalName: string, color?: string) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  currentModal: null,
  modalColor: "",
  openModal: (modalName, color = "white") =>
    set({ showModal: true, currentModal: modalName, modalColor: color }),
  closeModal: () =>
    set({ showModal: false, currentModal: null, modalColor: "" }),
}));
