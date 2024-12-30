import { z } from "zod";

export const schema: z.ZodType<loginSchema> = z.object({
  email: z.string().email("이메일 형식이 아닙니다."),
  password: z
    .string()
    .min(4, { message: "비밀번호는 최소 4자리 이상 입력해주세요." }),
});

export interface loginSchema {
  email: string;
  password: string;
}
