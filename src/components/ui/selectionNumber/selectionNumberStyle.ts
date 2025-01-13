import styled from "styled-components";

export const Wrapper = styled.div`
  width: 375px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--gray-999, #000);
  background: linear-gradient(180deg, #fff 0%, #d2dfff 100%);
  position: relative;
  overflow: hidden;
  padding: 23px 14px 27px 26px;
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const NumberBox = styled.div``;
export const Number = styled.div`
  display: flex;
`;
export const NumberDetail = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid var(--color-gray-999);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-0, #fff);
  background-color: var(--color-gray-999);
  margin-right: 9px;
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 600;
`;
export const DashBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
`;
export const Footer = styled.div`
  width: 100%;
  height: 9px;
  background: linear-gradient(90deg, #fffba6 0%, #44ff92 100%);
`;
