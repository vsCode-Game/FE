import { create } from "zustand";

interface IRoomState {
  roomId: number;
  setRoomId: (id: number) => void;
}

export const useRoomIdStore = create<IRoomState>((set) => ({
  roomId: 0,
  setRoomId: (id: number) => set({ roomId: id }),
}));
