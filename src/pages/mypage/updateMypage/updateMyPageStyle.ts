import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const contentsBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  gap: 30px;
`;

export const imgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
`;

export const inputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: var(--color-gray-999);
`;

export const img = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #5076ff;
  backdrop-filter: blur(24px);
`;

export const label = styled.label`
  font-weight: 500;
  font-size: 18px;
  color: var(--color-gray-999);
`;

export const buttonBox = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

export const errorMessage = styled.div`
  color: var(--color-warning);
`;
