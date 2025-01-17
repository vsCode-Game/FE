import { create } from "zustand";

interface IUserMyIdState {
  userMyId: number;
  setUserMyId: (userMyId: number) => void;
}

export const useUserMyIdStore = create<IUserMyIdState>((set) => ({
  userMyId: 0,
  setUserMyId: (userMyId: number) => set({ userMyId }),
}));
