import Input from "@components/ui/input/Input";
import Button from "@components/ui/button/Button";
import CheckBox from "@components/ui/checkBox/CheckBox";
import TextButton from "@components/ui/textButton/TextButton";
import { signUpSchema } from "./schema";
import {
  StyledLabel,
  InputBox,
  ErrorMessage,
  FlexCol,
  Flex,
  AgreeWrapper,
  AgreeBox,
  CheckLabel,
} from "./SignUpStyle";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

interface SignUpStepProps {
  onNext: () => void;
}

export default function SignUpStepOne({ onNext }: SignUpStepProps) {
  const navigate = useNavigate();
  const { formState } = useFormContext<signUpSchema>();

  const onClickPrev = () => {
    navigate(-1);
  };

  return (
    <>
      <FlexCol>
        <InputBox>
          <StyledLabel htmlFor="signupEmail">이메일</StyledLabel>
          <Flex>
            <Input<signUpSchema>
              type="text"
              keyname="userEmail"
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
          <ErrorMessage>{formState.errors.userEmail?.message}</ErrorMessage>
        </InputBox>
        <InputBox>
          <StyledLabel htmlFor="signupPassword">비밀번호</StyledLabel>
          <Input<signUpSchema>
            type="password"
            keyname="password"
            id="signupPassword"
            placeholder="비밀번호를 입력해 주세요."
          />
          <ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
        </InputBox>
        <InputBox>
          <StyledLabel htmlFor="signupPasswordConfirm">
            비밀번호 확인
          </StyledLabel>
          <Input<signUpSchema>
            type="password"
            keyname="passwordConfirm"
            id="signupPasswordConfirm"
            placeholder="비밀번호를 한번 더 입력해 주세요."
          />
          <ErrorMessage>
            {formState.errors.passwordConfirm?.message}
          </ErrorMessage>
        </InputBox>

        <AgreeWrapper>
          <AgreeBox>
            <CheckBox id="agreeTOU" />
            <CheckLabel htmlFor="agreeTOU">이용약관에 동의합니다.</CheckLabel>
            <TextButton>약관 보기</TextButton>
          </AgreeBox>
          <AgreeBox>
            <CheckBox id="agreePP" />
            <CheckLabel htmlFor="agreePP">
              개인정보처리방침에 동의합니다.
            </CheckLabel>
            <TextButton>약관 보기</TextButton>
          </AgreeBox>
        </AgreeWrapper>
      </FlexCol>
      <Flex>
        <Button
          type="button"
          size="sm"
          bgcolor="black"
          textcolor="white"
          width="190px"
          onClick={onClickPrev}
        >
          이전
        </Button>
        <Button
          type="button"
          size="sm"
          bgcolor="green"
          textcolor="black"
          width="190px"
          onClick={onNext}
        >
          다음
        </Button>
      </Flex>
    </>
  );
}
