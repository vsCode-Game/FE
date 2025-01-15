import { IBadgeProps } from "./badge_props";
import * as S from "./badgeStyle";

export default function Badge({ playerNumber, status }: IBadgeProps) {
  return (
    <S.Badge playerNumber={playerNumber} status={status}>
      {status}
    </S.Badge>
  );
}
