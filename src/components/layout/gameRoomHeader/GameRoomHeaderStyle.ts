import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 100px;
  background: linear-gradient(
    180deg,
    var(--color-secondary),
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100vw;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const TextButton = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
`;
