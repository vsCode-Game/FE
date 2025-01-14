import styled from "styled-components";

export const cardDeck = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 90px;
  border-radius: 8px;
  border: 1px solid
    ${({ color }) =>
      color === "black" ? "var(--color-gray-0)" : "var(--color-gray-999)"};
  background: ${({ color }) =>
    color === "black"
      ? "linear-gradient(167.45deg, var(--color-gray-600) 0.43%, var(--color-gray-999) 99.57%)"
      : "linear-gradient(167.4deg, var(--color-gray-0) 0.4%, var(--color-gray-200) 99.6%)"};

  box-shadow: 2px 4px 4px 0px #00000040;
`;

export const img = styled.img`
  color: ${({ color }) =>
    color === "black" ? "var(--color-gray-0)" : "var(--color-gray-999)"};
`;
