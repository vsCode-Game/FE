import { create } from "zustand";

interface testState {
  projectName: string;
}

export const useTestStore = create<testState>()((set) => ({
  projectName: "디카프리오 코드",
  changeProjectName: (newProjectName: string) =>
    set(() => ({ projectName: newProjectName })),
}));
