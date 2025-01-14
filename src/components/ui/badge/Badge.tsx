import { IBadgeProps } from "./badge_props";
import * as S from "./badgeStyle";

export default function Badge({ playerNumber }: IBadgeProps) {
  const status = playerNumber === 2 ? "playing" : "waiting...";

  return (
    <S.Badge playerNumber={playerNumber} status={status}>
      {status}
    </S.Badge>
  );
}
