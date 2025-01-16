import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const ContentsContainer = styled.div`
  text-align: center;
`;

export const Contents = styled.p`
  max-width: 250px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.7rem;
  word-break: break-word;

  &:first-child {
    margin-bottom: 20px;
  }
`;
