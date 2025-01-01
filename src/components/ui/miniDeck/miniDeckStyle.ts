import styled from "styled-components";

export const miniDeck = styled.div<{ color: string }>`
  width: 27px;
  height: 54px;
  border-radius: 8px;
  box-shadow: 1px 1px 3px 0px #00000080;
  border: 1px solid
    ${({ color }) =>
      color === "black" ? "var(--color-gray-0)" : "var(--color-gray-999)"};
  background: ${({ color }) =>
    color === "black" ? "var(--color-gray-999)" : "var(--color-gray-0)"};
`;
