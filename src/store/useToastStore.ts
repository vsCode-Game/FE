import { create } from "zustand";

export interface ToastProps {
  id: number;
  message: string;
}

interface IToastState {
  toasts: ToastProps[];
  setToast: (toast: ToastProps) => void;
  removeToast: (id: number) => void;
}

export const useToastStore = create<IToastState>()((set) => ({
  toasts: [], // 여러 개의 토스트를 배열에 저장
  setToast: (toast) =>
    set((state) => ({
      ...state,
      toasts: [...state.toasts, toast],
    })), // 새로운 토스트가 추가되면 기존 토스트 배열에 추가
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })), // 지정된 시간이 지난 토스트를 토스트 배열에서 제거
}));
