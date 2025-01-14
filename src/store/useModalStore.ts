import { create } from "zustand";

interface IModalState {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const useModalStore = create<IModalState>((set) => ({
  showModal: false,
  setShowModal: (value: boolean) => set({ showModal: value }),
}));

export default useModalStore;
