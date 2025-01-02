import { useState } from "react";
import * as S from "./radioButtonStyle"; // 스타일 import

export default function RadioButton() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => setIsChecked((prev) => !prev);

  return (
    <S.Label>
      <S.Input type="radio" onChange={toggleCheck} checked={isChecked} />
      <S.Span isChecked={isChecked} />
    </S.Label>
  );
}
