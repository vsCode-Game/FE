import { create } from "zustand";

interface IReadyState {
  ready: boolean;
  setReady: (ready: boolean) => void;
}

export const useReadyStore = create<IReadyState>((set) => ({
  ready: false,
  setReady: (ready: boolean) => set({ ready }),
}));
