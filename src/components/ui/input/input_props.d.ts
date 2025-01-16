interface IInputProps<P> {
  type: React.HTMLInputTypeAttribute;
  keyname: Path<P>;
  defaultValue?: string;
  disable?: boolean;
}
