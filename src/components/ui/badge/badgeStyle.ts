import styled from "styled-components";

export const Badge = styled.div<IBadgeProps>`
  width: 100%;
  height: 30px;
  border-radius: 30px;
  box-shadow: 1px 1px 3px 0px #000000e5;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.09px;
  color: #000000;

  ${({ bgColor }) => {
    switch (bgColor) {
      case "yellow":
        return `
            background: radial-gradient(120% 120% at 50% 100%, #FFFBA6 0%, #FFFFFF 100%);
            `;
      case "green":
        return `
        background: radial-gradient(120% 120% at 50% 100%, #44FF92 0%, #FFFFFF 100%);

        `;
      case "red":
        return `
            background: radial-gradient(120% 120% at 50% 100%, #FF5E5E 0%, #FFFFFF 100%);

            `;
    }
  }}
`;
