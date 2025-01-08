import { FieldValues, useFormContext } from "react-hook-form";
import * as S from "./inputStyle";

export default function Input<I extends FieldValues>({
  type,
  keyname,
  disable,
  defaultValue,
}: IInputProps<I>) {
  const { register } = useFormContext<I>();

  return (
    <S.input
      type={type}
      {...register(keyname)}
      disabled={disable}
      defaultValue={defaultValue}
    ></S.input>
  );
}
