// useSocketStore.ts
import { create } from "zustand";
import { Socket } from "socket.io-client";

interface SocketState {
  socket: Socket | null;
  setSocket: (newSocket: Socket | null) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  socket: null,

  setSocket: (newSocket: Socket | null) => set({ socket: newSocket }),
}));
