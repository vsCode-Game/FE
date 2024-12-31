import { z } from "zod";

export const schema: z.ZodType<signUpSchema> = z.object({
  email: z.string().email("이메일 형식이 아닙니다."),
  password: z
    .string()
    .min(4, { message: "비밀번호는 최소 4자리 이상 입력해주세요." }),
  passwordConfirm: z
    .string()
    .min(4, { message: "비밀번호는 최소 4자리 이상 입력해주세요." }),
  nickname: z
    .string()
    .min(2, { message: "닉네임은 최소 2자리 이상 입력해 주세요." }),
});

export interface signUpSchema {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  profileImage?: [];
}
