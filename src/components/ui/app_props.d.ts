interface IAppButtonProps {
  onClickFnc: () => void;
  type: "button" | "submit" | "reset";
  style: "default" | "small";
}

interface IAppInputProps {
  id: string;
}
