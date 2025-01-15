import styled from "styled-components";
import { IBadgeProps } from "./badge_props";

export const Badge = styled.div<IBadgeProps>`
  width: 110px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 1px 1px 3px 0px #000000e5;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
  color: var(--color-gray-999);

  ${({ status, playerNumber }) => {
    const computedStatus = playerNumber === 2 ? "playing" : status;

    switch (computedStatus) {
      case "waiting...":
        return `
          background: radial-gradient(120% 120% at 50% 100%, #FFFBA6 0%, #FFFFFF 100%);
        `;
      case "playing":
        return `
          background: radial-gradient(120% 120% at 50% 100%, #44FF92 0%, #FFFFFF 100%);
        `;
      case "not Ready":
        return `
          background: radial-gradient(120% 120% at 50% 100%, #FF5E5E 0%, #FFFFFF 100%);
        `;
      case "ready":
        return `
          background: radial-gradient(120% 120% at 50% 100%, #2571FF 0%, #FFFFFF 100%);
        `;
    }
  }};
`;
