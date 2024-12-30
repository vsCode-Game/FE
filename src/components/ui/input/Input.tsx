import { FieldValues, useFormContext } from "react-hook-form";
import * as S from "./inputStyle";

export default function Input<I extends FieldValues>({
  type,
  keyname,
}: IInputProps<I>) {
  const { register } = useFormContext<I>();

  return <S.input type={type} {...register(keyname)}></S.input>;
}
