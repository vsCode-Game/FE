import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 100px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0),
    var(--color-primary) 100%
  );
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray-600);
`;
