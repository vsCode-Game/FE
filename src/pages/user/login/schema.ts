import { z } from "zod";

export const schema: z.ZodType<loginSchema> = z.object({
  userEmail: z.string(),
  password: z
    .string()
    .min(4, { message: "비밀번호는 최소 4자리 이상 입력해주세요." }),
});

export interface loginSchema {
  userEmail: string;
  password: string;
}
