interface IInputProps<P> {
  type: HTMLInputTypeAttribute;
  keyname: Path<P>;
  defaultValue?: string;
  disable?: boolean;
}
