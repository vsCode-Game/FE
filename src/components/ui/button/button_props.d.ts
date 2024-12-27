import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  onClickFnc?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  style: "xl" | "l" | "md" | "sm" | "xs";
  bgColor: "black" | "green" | "red" | "white" | "blue";
  textColor: "black" | "gray" | "white";
}
