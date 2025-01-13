import Badge from "../badge/Badge";
import { Text, WaitingBox } from "./waitingPlayerBoxStyle";

export default function WaitingPlayerBox() {
  return (
    <WaitingBox>
      <Badge status="waiting..." />
      <Text>상대를 기다리는 중입니다.</Text>
    </WaitingBox>
  );
}
