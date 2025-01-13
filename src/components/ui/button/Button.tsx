import { IButtonProps } from "./button_props";
import * as S from "./buttonStyle";

export default function Button({
  children,
  onClickFnc,
  type = "button",
  disabled,
  size,
  bgcolor,
  textcolor,
  width,
  ...props
}: IButtonProps) {
  return (
    <S.Button
      type={type}
      onClick={onClickFnc}
      disabled={disabled}
      size={size}
      bgcolor={bgcolor}
      textcolor={textcolor}
      width={width}
      {...props}
    >
      {children}
    </S.Button>
  );
}
