import styled from "styled-components";

export const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 100%;
`;

export const SignUpTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  flex-grow: 1;
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
`;

export const InputBox = styled.div`
  width: 400px;
`;

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  color: var(--color-warning);
  margin-top: 10px;
`;
