import Input from "@components/ui/input/Input";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, signUpSchema } from "./schema";
import {
  SignUpSection,
  StyledLabel,
  SignUpTitle,
  InputBox,
  ErrorMessage,
  Form,
  FlexCol,
  Flex,
} from "./SignUpStyle";
import Button from "../../../components/ui/button/Button";

export default function SignUp() {
  const methods = useForm<signUpSchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = () => {};

  return (
    <SignUpSection>
      <SignUpTitle>회원가입</SignUpTitle>
      <Flex></Flex>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onClickSubmit)}>
          <FlexCol>
            <InputBox>
              <StyledLabel htmlFor="signupEmail">이메일</StyledLabel>
              <Flex>
                <Input<signUpSchema>
                  type="text"
                  keyname="email"
                  id="signupEmail"
                  placeholder="이메일을 입력해 주세요."
                />
                <Button
                  type="button"
                  size="sm"
                  bgcolor="blue"
                  textcolor="black"
                  width="100px"
                >
                  중복확인
                </Button>
              </Flex>
              <ErrorMessage>
                {methods.formState.errors.email?.message}
              </ErrorMessage>
            </InputBox>
            <InputBox>
              <StyledLabel htmlFor="signupPassword">비밀번호</StyledLabel>
              <Input<signUpSchema>
                type="text"
                keyname="password"
                id="signupPassword"
                placeholder="비밀번호를 입력해 주세요."
              />
              <ErrorMessage>
                {methods.formState.errors.password?.message}
              </ErrorMessage>
            </InputBox>
            <InputBox>
              <StyledLabel htmlFor="signupPasswordConfirm">
                비밀번호 확인
              </StyledLabel>
              <Input<signUpSchema>
                type="text"
                keyname="passwordConfirm"
                id="signupPasswordConfirm"
                placeholder="비밀번호를 한번 더 입력해 주세요."
              />
              <ErrorMessage>
                {methods.formState.errors.passwordConfirm?.message}
              </ErrorMessage>
            </InputBox>
          </FlexCol>
          <Flex></Flex>
          <Flex>
            <Button
              type="button"
              size="sm"
              bgcolor="black"
              textcolor="white"
              width="190px"
            >
              이전
            </Button>
            <Button
              type="button"
              size="sm"
              bgcolor="green"
              textcolor="black"
              width="190px"
            >
              다음
            </Button>
          </Flex>
        </Form>
      </FormProvider>
    </SignUpSection>
  );
}
