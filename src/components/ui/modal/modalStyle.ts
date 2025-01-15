import styled, { css } from "styled-components";

const baseStyle = css`
  width: 460px;
  min-height: 400px;
  height: fit-content;
  border-radius: 50px;
  overflow: hidden;
  font-size: 20px;
`;

const modalStyles = {
  white: css`
    ${baseStyle};
    background-color: white;
  `,
  blue: css`
    ${baseStyle};
    background: linear-gradient(180deg, #fff 0%, #d2dfff 100%);
    border: 1px solid var(--color-gray-999);
  `,
};

export const ModalFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Inside = styled.div<{ styleKey: string }>`
  ${({ styleKey }) => modalStyles[styleKey]}
`;
