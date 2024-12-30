import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 200px;
  background: linear-gradient(
    180deg,
    var(--color-primary),
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  padding: 55px 30px 0;
  position: fixed;
  width: 100vw;
`;

export const Logo = styled.h1`
  flex-grow: 1;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  font-size: 20px;
  font-weight: 500;
`;
