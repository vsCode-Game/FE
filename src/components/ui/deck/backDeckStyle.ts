import styled from "styled-components";

export const cardDeck = styled.button<{ color: string; myHighlight?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 90px;
  border-radius: 8px;
  border: ${({ myHighlight, color }) =>
    myHighlight
      ? "2px solid red" // highlight가 true → 빨간 테두리
      : color === "black"
      ? "1px solid var(--color-gray-0)"
      : "1px solid var(--color-gray-999)"};
  background: ${({ color }) =>
    color === "black"
      ? "linear-gradient(167.45deg, var(--color-gray-600) 0.43%, var(--color-gray-999) 99.57%)"
      : "linear-gradient(167.4deg, var(--color-gray-0) 0.4%, var(--color-gray-200) 99.6%)"};

  box-shadow: 2px 4px 4px 0px #00000040;

  &:disabled {
    cursor: not-allowed; /* 마우스 커서 변경 */
    pointer-events: none; /* 클릭 이벤트 비활성화 (추가 안전장치) */
  }
`;

export const img = styled.img<{ color: string }>`
  ${({ color }) =>
    color === "black" &&
    `
      filter: invert(1) brightness(2);
    `}
`;
