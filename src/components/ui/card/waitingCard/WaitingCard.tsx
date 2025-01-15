import Badge from "../../badge/Badge";
import * as S from "./waitingCardStyle";

export default function WaitingCard() {
  return (
    <S.container>
      <Badge status="waiting..." />
      <S.text>상대를 기다리는 중입니다.</S.text>
    </S.container>
  );
}
