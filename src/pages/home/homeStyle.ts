import styled, { css } from "styled-components";
import Button from "@components/ui/button/Button";

const basicStyle = css`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  box-shadow: 1px 1px 5px 0 rgba(176, 176, 176, 0.5);
  backdrop-filter: blur(20px);
`;

export const HomeContainer = styled.div`
  width: 100%;
  min-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-shrink: 0;
`;

export const NavWrapper = styled.nav`
  width: 100%;
  padding: 25px;
  ${basicStyle}
`;

export const NavList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  font-weight: 500;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 50px;
  ${basicStyle}
`;

export const Messages = styled.ul`
  line-height: 1.7rem;
`;

export const StartButton = styled(Button)`
  font-family: "DOSIyagiMedium";
`;
