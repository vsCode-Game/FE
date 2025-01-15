import { createPortal } from "react-dom";
import { useToastStore } from "../../../store/useToastStore";
import styled, { keyframes } from "styled-components";

export default function Toast() {
  const toasts = useToastStore((state) => state.toasts);
  const element = document.getElementById("toast-root") as HTMLElement;

  return createPortal(
    toasts.length > 0 ? (
      <>
        {toasts.map(({ id, message }) => (
          <ToastFrame key={id}>
            <ToastMessage>{message}</ToastMessage>
          </ToastFrame>
        ))}
      </>
    ) : null,
    element,
  );
}

const FadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  70% {
   opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ToastFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: radial-gradient(
    78.68% 145.31% at 50% 100.71%,
    var(--color-primary) 0%,
    var(--color-gray-0) 100%
  );
  width: fit-content;
  height: 60px;
  min-width: 500px;
  border-radius: 50px;
  border: 1px solid var(--color-gray-999);
  animation: ${FadeInOut} 3s ease-in-out forwards;
`;

const ToastMessage = styled.p`
  font-size: 24px;
`;
