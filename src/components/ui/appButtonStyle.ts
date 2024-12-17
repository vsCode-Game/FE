import styled from "styled-components";

export const Button = styled.button<{ $style: IAppButtonProps["style"] }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  ${({ $style }) => {
    switch ($style) {
      case "small":
        return `
          padding: 5px 10px;
          font-size: 12px;
        `;
      case "default":
      default:
        return `
          padding: 10px 20px;
          font-size: 16px;
        `;
    }
  }}

  &:hover {
    background-color: #f0f0f0; /* 간단한 hover 효과 */
  }
`;
