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
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: yellow;
`;

export const centerContainer = styled.div`
  height: 1000px;
  width: 100%;
  background-color: green;
  position: relative;
`;

export const rightContainer = styled.div`
  margin-right: 77px;
  padding-bottom: 44px;
  width: 390px;
  height: 1000px;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: end;
  background-color: blue;
`;

export const myDeckBox = styled.div`
  width: 100%;
  height: 90px;
  gap: 40px;
  background-color: purple;
`;

export const guideBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: center;
  background-color: red;
`;

export const otherPlayerDeck = styled.div`
  margin-top: 14px;
  width: 100%;
  height: 90px;
  display: flex;
  gap: 12px;
  background-color: aqua;
`;

export const selectNumberBox = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 229px;
  background-color: black;
`;
