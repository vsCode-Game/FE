import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Inside = styled.div`
  min-width: 400px;
  min-height: 400px;
  height: fit-content;
  background-color: var(--color-gray-0);
  border-radius: 50px;
  overflow: hidden;
  font-size: 20px;
  color: var(--color-warning);
`;
