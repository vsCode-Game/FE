import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: var(--color-gray-900);
`;

export const numberContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const leftContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 40px);
  grid-template-rows: repeat(2, 40px);
  gap: 10px;
`;

export const rightContaider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
