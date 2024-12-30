import { FieldValues, useFormContext } from "react-hook-form";
import { IInputProps2 } from "./input2_props";

export default function Input<I extends FieldValues>(props: IInputProps2<I>) {
  const { register } = useFormContext<I>();
  return (
    <input
      className={props.className}
      type={props.type}
      {...register(props.keyname)}
    />
  );
}
