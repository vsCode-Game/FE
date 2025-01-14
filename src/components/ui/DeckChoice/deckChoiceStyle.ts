import styled from "styled-components";

export const DeckContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 170px;
  height: 80px;
  background: linear-gradient(180deg, #f8f8f8 0%, #e4e4e4 100%);
  border: 1px solid var(--color-gray-999);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border: 4px solid var(--color-primary);
  }
`;
