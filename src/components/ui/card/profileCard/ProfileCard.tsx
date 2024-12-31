import { ReactNode } from "react";
import { CardIndex, PlayerCard } from "./ProfileCardStyle";

export default function ProfileCard({ children }: { children: ReactNode }) {
  return (
    <>
      <CardIndex>나</CardIndex>
      <PlayerCard>{children}</PlayerCard>
    </>
  );
}
