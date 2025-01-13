import { ReactNode } from "react";

export interface IBadgeProps {
  status?: "waiting..." | "playing" | "not Ready";
  children?: ReactNode;
  playerNumber?: number;
}
