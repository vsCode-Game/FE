import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const title = styled.div`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: var(--color-gray-999);
`;

export const deckContainer = styled.div`
  display: grid;
  margin-top: 25px;
  grid-template-columns: repeat(auto-fill, 170px);
  grid-auto-rows: 80px;
  gap: 20px;
  justify-content: center;
`;

export const testBox = styled.div`
  width: 460px;
  border-radius: 50px;
  background-color: var(--color-gray-0);
`;
