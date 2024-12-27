import { IButtonProps } from "./button_props";
import * as S from "./buttonStyle";

export default function Button({
  children,
  onClickFnc,
  type = "button",
  disabled = false,
  style,
  bgColor,
  textColor,
}: IButtonProps) {
  return (
    <S.Button
      type={type}
      onClick={onClickFnc}
      disabled={disabled}
      style={style}
      bgColor={bgColor}
      textColor={textColor}
    >
      {children}
    </S.Button>
  );
}
