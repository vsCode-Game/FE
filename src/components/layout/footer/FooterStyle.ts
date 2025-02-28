import styled from "styled-components";

interface FooterProps {
  isGameRoom: boolean;
}

export const StyledFooter = styled.footer<FooterProps>`
  width: 100vw;
  height: 100px;
  background: ${(props) =>
    props.isGameRoom === false
      ? `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0),
    var(--color-primary) 100%
  );`
      : `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0),
    var(--color-secondary) 100%
  );`};

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray-600);
  position: fixed;
  bottom: 0px;
`;
