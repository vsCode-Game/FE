import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const checkPasswordBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`;

export const p = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: var(--color-gray-999);
`;

export const label = styled.label`
  margin-top: 30px;
  font-weight: 500;
  font-size: 18px;
  color: var(--color-gray-999);
  margin-bottom: 11px;
`;

export const buttonBox = styled.div`
  width: 400px;
  margin-top: 150px;
  display: flex;
  gap: 20px;
`;
