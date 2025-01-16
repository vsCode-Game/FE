import styled from "styled-components";

export const chatInput = styled.input`
  width: 100%;
  flex-grow: 1;
  height: 30px;
  padding: 9px 15px;
  border: 1px solid var(--color-gray-999);
  font-weight: 400;
  font-size: 12px;
  border-radius: 14px;
  background-color: var(--color-gray-0);

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

export const buttonBox = styled.div`
  width: 80px;
`;

export const chatInputBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
