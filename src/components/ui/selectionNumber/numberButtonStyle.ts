import styled from "styled-components";

export const numberButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--color-gray-999);
  border-radius: 50px;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: var(--color-gray-0);

  &:hover {
    border: 3px solid var(--color-primary);
  }
`;
