import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  gap: 30px;
`;

export const title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: var(--color-gray-999);
`;

export const inputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
  height: 75px;
`;

export const label = styled.label`
  font-weight: 500;
  font-size: 18px;
  color: var(--color-gray-999);
`;

export const warningContainer = styled.div`
  font-weight: 300;
  font-size: 13px;
  color: var(--color-gray-600);
  line-height: 1.5rem;
`;

export const buttonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
