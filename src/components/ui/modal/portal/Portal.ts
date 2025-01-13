import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface iModalPortalProps {
  children: ReactNode;
}

const Portal = ({ children }: iModalPortalProps) => {
  const el = document.getElementById("modal-root") as HTMLElement;
  return ReactDOM.createPortal(children, el);
};

export default Portal;
