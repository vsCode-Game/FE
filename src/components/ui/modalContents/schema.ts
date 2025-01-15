import { z } from "zod";

export const schema = z.object({
  roomName: z.string(),
});

export interface IRoomNameSchema {
  roomName: string;
}
