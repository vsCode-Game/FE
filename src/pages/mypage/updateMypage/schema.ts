import { z } from "zod";

export const schema = z
  .object({
    password: z
      .string()
      .min(1, { message: "비밀번호는 최소 한 글자 이상이어야 합니다." }),
    checkPassword: z.string(),
    nickname: z
      .string()
      .min(1, { message: "닉네임은 최소 한 글자 이상이어야 합니다." }),
  })
  .refine((data) => data.password === data.checkPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["checkPassword"],
  });

export type UpdateMyPageType = z.infer<typeof schema>;
