import styled from "styled-components";

export const cardDeck = styled.div<{
  color: string;
  myHighlight?: boolean;
  isFlipped: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 90px;
  border-radius: 8px;
  border: ${({ myHighlight, color, isFlipped }) =>
    isFlipped
      ? "1px solid red"
      : myHighlight
      ? "2px solid yellow" // highlight가 true일 때 노란색 테두리
      : color === "black"
      ? "1px solid var(--color-gray-0)"
      : "1px solid var(--color-gray-999)"};
  background: ${({ color }) =>
    color === "black"
      ? "linear-gradient(167.45deg, var(--color-gray-600) 0.43%, var(--color-gray-999) 99.57%)"
      : "linear-gradient(167.4deg, var(--color-gray-0) 0.4%, var(--color-gray-200) 99.6%)"};

  box-shadow: 2px 4px 4px 0px #00000040;
`;

export const number = styled.div<{ underBar: boolean; color: string }>`
  height: 40px;
  font-weight: 600;
  font-size: 32px;
  color: ${({ color }) =>
    color === "black" ? "var(--color-gray-0)" : "var(--color-gray-999)"};
  position: relative;

  ${({ underBar }) =>
    underBar &&
    `
      &::after {
        content: '_';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 16px;
      }
    `}
`;
