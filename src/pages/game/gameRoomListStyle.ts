import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  padding: 30px 170px;
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

export const gameroomListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-auto-rows: 260px;
  gap: 40px;
  justify-content: center;
`;
