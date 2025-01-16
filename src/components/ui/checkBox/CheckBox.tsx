import { useState } from "react";
import { Input, Label, Span } from "./checkBoxStyle";

export default function CheckBox({ ...props }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Label>
      <Input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        {...props}
      />
      <Span isChecked={isChecked} />
    </Label>
  );
}
