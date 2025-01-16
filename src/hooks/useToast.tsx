import { ToastProps, useToastStore } from "../store/useToastStore";

const useToast = () => {
  const { setToast, removeToast } = useToastStore();

  const openToast = (message: string) => {
    const newToast: ToastProps = {
      id: Date.now(),
      message,
    };

    setToast(newToast);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 3000);
  };

  return openToast;
};

export default useToast;
