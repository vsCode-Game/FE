import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface IModalPortalProps {
  children: ReactNode;
}

const Portal = ({ children }: IModalPortalProps) => {
  const el = document.getElementById("toast-root") as HTMLElement;
  return ReactDOM.createPortal(children, el);
};

export default Portal;
