import { StyledButton } from "./TextButtonStyle.ts";

interface ITextButtonProps {
  children: React.ReactNode;
}

export default function TextButton({ children }: ITextButtonProps) {
  return <StyledButton type="button">{children}</StyledButton>;
}
