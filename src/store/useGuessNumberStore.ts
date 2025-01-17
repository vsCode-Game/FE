import { create } from "zustand";

interface ICardState {
  cardIndex: number;
  setCardIndex: (cardIndex: number) => void;
}

export const useCardIndexStore = create<ICardState>((set) => ({
  cardIndex: -1,
  setCardIndex: (cardIndex: number) => set({ cardIndex }),
}));
