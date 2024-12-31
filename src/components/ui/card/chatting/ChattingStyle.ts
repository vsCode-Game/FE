import styled from "styled-components";

export const chat = styled.div`
  position: relative;
  width: 390px;
  height: 390px;
  border-radius: 12px;
  border: 1px solid var(--color-gray-999);
  box-shadow: 1px 1px 3px 0px #00000080;
  background: linear-gradient(
    180deg,
    var(--color-gray-0) 0%,
    var(--color-yellow-900) 100%
  );
`;

export const chatInputBoxContainer = styled.div`
  position: absolute;
  bottom: 20px;
  padding: 0 10px;
  width: 100%;
`;
