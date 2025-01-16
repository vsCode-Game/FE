import { z } from "zod";

const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&^.,/]{8,}$/;

export const schema: z.ZodType<signUpSchema> = z.object({
  userEmail: z.string().email("이메일 형식이 아닙니다."),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자리 이상 입력해주세요." })
    .regex(regexPassword, {
      message:
        "숫자, 소문자, 대문자, 특수문자를 포함하여 8자리 이상 입력해 주세요.",
    }),
  passwordConfirm: z
    .string()
    .min(4, { message: "비밀번호는 최소 8자리 이상 입력해주세요." })
    .regex(regexPassword, {
      message:
        "숫자, 소문자, 대문자, 특수문자를 포함하여 8자리 이상 입력해 주세요.",
    }),
  userNickname: z
    .string()
    .min(2, { message: "닉네임은 최소 2자리 이상 입력해 주세요." }),
});

export interface signUpSchema {
  userEmail: string;
  password: string;
  passwordConfirm: string;
  userNickname: string;
  profileImage?: [];
}
