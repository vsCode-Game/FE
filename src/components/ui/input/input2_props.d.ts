import { HTMLInputTypeAttribute } from "react";
import { Path } from "react-router-dom";

interface IInputProps2<P> {
  className?: string;
  type: HTMLInputTypeAttribute;
  keyname: Path<P>;
}
