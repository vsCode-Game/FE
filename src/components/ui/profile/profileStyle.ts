import styled from "styled-components";

export const container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--color-gray-100);
`;

export const nameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const nickname = styled.h1`
  font-weight: 600;
  font-size: 16px;
  color: var(--color-gray-999);
`;

export const rankBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const rank = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--color-gray-999);
`;

export const trophyImg = styled.img`
  width: 14px;
  height: 14px;
`;
