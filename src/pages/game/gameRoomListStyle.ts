import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const buttonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: end;
`;

export const buttonText = styled.span`
  margin-left: 10px;
`;

export const gameroomListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-auto-rows: 260px;
  gap: 40px;
  justify-content: center;
`;
