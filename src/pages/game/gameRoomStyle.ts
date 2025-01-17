import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: 38px;
  width: 100%;
  height: 100%;
  gap: 38px;
`;

export const leftContainer = styled.div`
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const centerContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-grow: 1;
  position: relative;
`;

export const rightContainer = styled.div`
  width: 390px;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: space-between;
`;

export const myDeckBox = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 90px;
  flex-grow: 1;
  gap: 11px;
`;

export const otherPlayerDeck = styled.div`
  margin-top: 14px;
  width: 100%;
  height: 90px;
  display: flex;
  gap: 12px;
`;

export const selectNumberBox = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 229px;
`;
