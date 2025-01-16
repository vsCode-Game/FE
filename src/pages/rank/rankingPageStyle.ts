import styled from "styled-components";

export const FullBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;
export const TrophyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const TrophyImage = styled.img`
  width: 100px;
  height: 100px;
`;
export const H1 = styled.h1`
  color: var(--gray-999);
  font-size: 32px;
  font-weight: 700;
`;
export const MainTextBox = styled.div`
  display: flex;
  margin-top: 45px;
  gap: 138px;
  margin-left: 111px;
  color: var(--gray-999, #000);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const Hr = styled.hr`
  width: 100%;
  position: relative;
  border-top: 2px solid #000;
  box-sizing: border-box;
  height: 2px;
`;
