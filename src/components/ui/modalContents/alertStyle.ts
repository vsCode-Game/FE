import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 50px;
`;

export const Message = styled.p`
  font-size: 20px;
  word-wrap: break-word;
  max-width: 400px;
  line-height: 1.7rem;
  text-align: center;
`;
