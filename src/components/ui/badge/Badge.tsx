import { IBadgeProps } from "./badge_props";
import * as S from "./badgeStyle";

export default function Badge({ bgColor, children }: IBadgeProps) {
  return <S.Badge bgColor={bgColor}>{children}</S.Badge>;
}
