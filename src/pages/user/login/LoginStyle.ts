import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 50px;
`;

export const loginBox = styled.div`
  width: 400px;
`;
export const label = styled.label`
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;

export const title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: #000000;
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
  color: red;
`;
