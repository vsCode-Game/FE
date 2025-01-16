import { useState } from "react";
import * as S from "./selectionNumberStyle";

export default function SelectNumber() {
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedNumber(value);
  };

  const numbers = Array.from({ length: 12 }, (_, i) => i.toString());

  return (
    <S.NumberBox>
      <S.NumberWrapper>
        {[0, 6].map((startIndex) => (
          <S.NumberRow key={`row-${startIndex}`}>
            {numbers.slice(startIndex, startIndex + 6).map((number) => (
              <S.NumberDetail
                key={number}
                isSelected={selectedNumber === number}
                onClick={() => handleSelect(number)}
              >
                {number}
              </S.NumberDetail>
            ))}
          </S.NumberRow>
        ))}
      </S.NumberWrapper>
      <S.HypenBox>
        <S.HypenLabel
          isSelected={selectedNumber === "-"}
          onClick={() => handleSelect("-")}
        >
          -
        </S.HypenLabel>
      </S.HypenBox>
    </S.NumberBox>
  );
}
