import styled from "styled-components";
import { IButtonProps } from "./button_props";

export const Button = styled.button<IButtonProps>`
  border-radius: 50px;
  border: 1px solid var(--color-gray-999);
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  ${({ width }) => {
    return `width: ${width ?? "100%"};`;
  }}

  ${({ size }) => {
    switch (size) {
      case "xl":
        return `
          height: 80px;
          font-weight: 500;
          font-size: 40px;          
        `;
      case "l":
        return `
          height: 60px;
          font-weight: 700;
          font-size: 20px;          
        `;
      case "md":
        return `
          height: 50px;
          font-weight: 600;
          font-size: 18px;
        `;
      case "sm":
        return `
          height: 40px;
          font-weight: 600;
          font-size: 16px;
        `;
      case "xs":
        return `
          height: 30px;
          font-weight: 600;
          font-size: 14px;
        `;
      default:
        return `
          height: 50px;
          font-weight: 400;
          font-size: 16px;
        `;
    }
  }};

  ${({ bgcolor, disabled }) => {
    if (disabled) {
      return `
        background: radial-gradient(120% 120% at 50% 100%, #949494 0%, #FFFFFF 100%);
      `;
    }

    switch (bgcolor) {
      case "black":
        return `
          background: #000000;
        `;
      case "blue":
        return `
          background: radial-gradient(78.73% 146.71% at 50% 100.71%, #2571FF 0%, #FFFFFF 100%);
        `;
      case "green":
        return `
          background: radial-gradient(78.68% 145.31% at 50% 100.71%, #44FF92 0%, #FFFFFF 100%);
        `;
      case "white":
        return `
          background: radial-gradient(78.68% 145.31% at 50% 100.71%, #E4E4E4 0%, #FFFFFF 100%);
        `;
      case "red":
        return `
          background: radial-gradient(78.73% 146.71% at 50% 100.71%, #FF5E5E 0%, #FFFFFF 100%);
        `;
      default:
        return `
          background: transparent;
        `;
    }
  }}

  ${({ textcolor, disabled }) => {
    if (disabled) {
      return `
        color: var(--color-gray-600);
      `;
    }

    switch (textcolor) {
      case "black":
        return `
          color: #000000;
        `;
      case "white":
        return `
          color: #ffffff;
        `;
      case "gray":
        return `
          color: #6c6c6c
        `;
      default:
        return `
            color: inherit;
          `;
    }
  }}
`;
