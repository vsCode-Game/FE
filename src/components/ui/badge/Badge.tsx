import { IBadgeProps } from "./badge_props";
import * as S from "./badgeStyle";

export default function Badge({ status }: IBadgeProps) {
  return <S.Badge status={status}>{status}</S.Badge>;
}
