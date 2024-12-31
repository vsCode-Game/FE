import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  onClickFnc?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  size: "xl" | "l" | "md" | "sm" | "xs";
  bgcolor: "black" | "green" | "red" | "white" | "blue";
  textcolor: "black" | "gray" | "white";
  width: string;
}
