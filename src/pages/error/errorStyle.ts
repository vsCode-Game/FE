import styled from "styled-components";

export const ErrorWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 400px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  box-shadow: 1px 1px 5px 0 rgba(176, 176, 176, 0.5);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const ErrorTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ErrorDescription = styled.p`
  font-size: 20px;
  line-height: 2.5rem;
  text-align: center;
  width: 320px;
  word-wrap: break-word;
`;
