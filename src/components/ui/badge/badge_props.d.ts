import { ReactNode } from "react";

// interface IBadgeProps {
//   bgColor: "yellow" | "green" | "red";
//   children: ReactNode;
//   type:
// }

export interface IBadgeProps {
  status: "waiting..." | "playing" | "not Ready";
  children: ReactNode;
}
