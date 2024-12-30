import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/ui/button/Button";
import * as S from "./LoginStyle";
import { loginSchema, schema } from "./schema";
import Input from "../../../components/ui/input/Input";

export default function LoginPage() {
  const methods = useForm<loginSchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  return (
    <S.container>
      <S.loginBox>
        <S.title>로그인</S.title>
        <FormProvider {...methods}>
          <S.form>
            <S.inputBox>
              <S.label>이메일</S.label>
              <Input type="text" keyname="email" />
              <S.errorMessage>
                {methods.formState.errors.email?.message}
              </S.errorMessage>
            </S.inputBox>
            <S.inputBox>
              <S.label>비밀번호</S.label>
              <Input type="text" keyname="email" />
              <S.errorMessage>
                {methods.formState.errors.password?.message}
              </S.errorMessage>
            </S.inputBox>
            <Button type="submit" size="sm" bgColor="green" textColor="black">
              로그인
            </Button>
          </S.form>
        </FormProvider>
      </S.loginBox>
    </S.container>
  );
}
