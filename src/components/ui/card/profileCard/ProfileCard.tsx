import { ReactNode } from "react";
import { CardIndex, PlayerCard } from "./ProfileCardStyle";

export default function ProfileCard({ children }: { children: ReactNode }) {
  return (
    <div>
      <CardIndex>나 or 상대플레이어</CardIndex>
      <PlayerCard>{children}</PlayerCard>
    </div>
  );
}
