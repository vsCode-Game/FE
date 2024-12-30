// import styled from "styled-components";

// export const Badge = styled.div<IBadgeProps>`
//   width: 110px;
//   height: 30px;
//   border-radius: 30px;
//   box-shadow: 1px 1px 3px 0px #000000e5;
//   font-weight: 600;
//   font-size: 16px;
//   text-align: center;
//   line-height: 32px;
//   /* line-height: 19.09px; */
//   color: #000000;

//   ${({ bgColor }) => {
//     switch (bgColor) {
//       case "yellow":
//         return `
//             background: radial-gradient(120% 120% at 50% 100%, #FFFBA6 0%, #FFFFFF 100%);
//             `;
//       case "green":
//         return `
//         background: radial-gradient(120% 120% at 50% 100%, #44FF92 0%, #FFFFFF 100%);

//         `;
//       case "red":
//         return `
//             background: radial-gradient(120% 120% at 50% 100%, #FF5E5E 0%, #FFFFFF 100%);

//             `;
//     }
//   }}
// `;

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
  line-height: 32px;
  /* line-height: 19.09px; */
  color: #000000;

  ${({ status }) => {
    switch (status) {
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
    }
  }}
`;
