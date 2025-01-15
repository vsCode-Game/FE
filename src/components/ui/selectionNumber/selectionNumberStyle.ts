import styled from "styled-components";

export const NumberBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NumberRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const HypenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const NumberDetail = styled.button<{ isSelected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid
    ${({ isSelected }) =>
      isSelected ? "var(--color-green, #44ff92)" : "var(--color-gray-999)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected }) =>
    isSelected ? "var(--gray-999, #000)" : "var(--gray-0, #fff)"};
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--color-green, #44ff92)" : "var(--color-gray-999)"};
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: var(--color-primary);
    transform: scale(1.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const HypenLabel = styled.button<{ isSelected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid
    ${({ isSelected }) =>
      isSelected ? "var(--color-green, #44ff92)" : "var(--color-gray-999)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected }) =>
    isSelected ? "var(--gray-999, #000)" : "var(--gray-0, #fff)"};
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--color-green, #44ff92)" : "var(--color-gray-999)"};
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: var(--color-primary);
    transform: scale(1.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
