import { IBadgeProps } from "./badge_props";
import * as S from "./badgeStyle";

export default function Badge({ bgColor }: IBadgeProps) {
  return <S.Badge bgColor={bgColor}></S.Badge>;
}
