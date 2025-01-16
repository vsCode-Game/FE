import { ReactNode } from "react";

export interface IBadgeProps {
  status?: "waiting..." | "playing" | "not Ready" | "ready";
  children?: ReactNode;
  playerNumber?: number;
}
