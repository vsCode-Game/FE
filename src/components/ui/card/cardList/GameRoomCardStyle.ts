import styled from "styled-components";

export const cardContainer = styled.div`
  width: 500px;
  position: relative;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: var(--color-gray-0);
  border: 2px solid var(--color-gray-999);
  box-sizing: border-box;
  height: 260px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const titleBox = styled.div`
  margin-top: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  word-break: break-word;
  color: var(--gray-999, #000);
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

export const buttonContainer = styled.div`
  display: flex;
  justify-content: end;
  position: absolute;
  right: 30px;
  bottom: 30px;
`;
