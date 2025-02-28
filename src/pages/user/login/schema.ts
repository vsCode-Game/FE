import { z } from "zod";

const regexPassword = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const schema: z.ZodType<loginSchema> = z.object({
  userEmail: z.string().email("이메일 형식이 아닙니다."),
  password: z
    .string()
    .min(8, {
      message:
        "비밀번호는 숫자와 특수문자를 포함하여 8자리 이상 입력해 주세요.",
    })
    .regex(regexPassword, {
      message:
        "비밀번호는 숫자와 특수문자를 포함하여 8자리 이상 입력해 주세요.",
    }),
});

export interface loginSchema {
  userEmail: string;
  password: string;
}
