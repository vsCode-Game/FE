import { FieldValues, useFormContext } from "react-hook-form";
import { IFormButtonProps } from "./button2_props";

export default function FormButton<F extends FieldValues>(
  props: IFormButtonProps,
) {
  const { formState } = useFormContext<F>();
  return (
    <button className={props.className} disabled={!formState.isValid}>
      {props.children}
    </button>
  );
}
