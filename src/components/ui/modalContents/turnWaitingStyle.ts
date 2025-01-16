import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  width: 130px;
  height: auto;
`;

export const ContentsContainer = styled.div`
  text-align: center;
`;

export const Contents = styled.p`
  max-width: 200px;
  font-size: 20px;
  line-height: 1.7rem;
  word-break: break-word;

  &:first-child {
    margin-bottom: 20px;
  }
`;
