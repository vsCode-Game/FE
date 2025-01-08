import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
  height: 100%;
`;

export const loginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 400px;
`;
export const label = styled.label`
  font-weight: 500;
  font-size: 18px;
  color: var(--color-gray-999);
`;

export const title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: var(--color-gray-999);
`;

export const inputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 14px;
  background-color: #f8f8f8;
`;

export const form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 50px;
`;

export const errorMessage = styled.div`
  color: var(--color-warning);
`;
