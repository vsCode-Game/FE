
// import * as S from "./badgeStyle";

// export default function Badge({ bgColor }: IBadgeProps) {
//   return <S.Badge bgColor={bgColor}></S.Badge>;
// }

import { IBadgeProps } from "./badge_props";
import * as S from "./badgeStyle";

export default function Badge({ status }: IBadgeProps) {
  return <S.Badge status={status}>{status}</S.Badge>;
}
