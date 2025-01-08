import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/ui/button/Button";
import * as S from "./loginStyle";
import { loginSchema, schema } from "./schema";
import Input from "../../../components/ui/input/Input";

export default function LoginPage() {
  const methods = useForm<loginSchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: loginSchema) => {
    console.log(data);
  };
  return (
    <>
      <S.container>
        <S.loginBox>
          <S.title>로그인</S.title>
          <FormProvider {...methods}>
            <S.form onSubmit={methods.handleSubmit(onClickSubmit)}>
              <S.inputBox>
                <S.label>이메일</S.label>
                <Input<loginSchema> type="text" keyname="email" />
                <S.errorMessage>
                  {methods.formState.errors.email?.message}
                </S.errorMessage>
              </S.inputBox>
              <S.inputBox>
                <S.label>비밀번호</S.label>
                <Input<loginSchema> type="password" keyname="password" />
                <S.errorMessage>
                  {methods.formState.errors.password?.message}
                </S.errorMessage>
              </S.inputBox>
              <Button type="submit" size="sm" bgcolor="green" textcolor="black">
                로그인
              </Button>
            </S.form>
          </FormProvider>
        </S.loginBox>
      </S.container>
    </>
  );
}
