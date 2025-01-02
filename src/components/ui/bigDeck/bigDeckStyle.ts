import styled from "styled-components";

export const bigDeck = styled.div<{ color: string }>`
  width: 100px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid
    ${({ color }) =>
      color === "black" ? "var(--color-gray-0)" : "var(--color-gray-999)"};
  background: ${({ color }) =>
    color === "black"
      ? "linear-gradient(167.45deg, var(--color-gray-600) 0.43%, var(--color-gray-999) 99.57%)"
      : "linear-gradient(167.4deg, var(--color-gray-0) 0.4%, var(--color-gray-200) 99.6%)"};

  &:hover {
    border: 4px solid var(--color-primary);
  }
`;
