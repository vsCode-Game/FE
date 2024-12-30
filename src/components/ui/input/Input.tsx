import { useFormContext } from "react-hook-form";
import * as S from "./inputStyle";

export default function Input({ type, keyname }: IInputProps) {
  const { register } = useFormContext();
  return <S.input type={type} {...register(keyname)}></S.input>;
}
