import { IButtonProps } from "./button_props";
import * as S from "./buttonStyle";

export default function Button({
  children,
  onClick,
  type = "button",
  size,
  bgcolor,
  textcolor,
  disabled,
  width,
  playerNumber,
}: IButtonProps) {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      bgcolor={bgcolor}
      textcolor={textcolor}
      width={width}
      playerNumber={playerNumber}
    >
      {children}
    </S.Button>
  );
}
