import Button from "@components/ui/button/Button";
import Input from "@components/ui/input/Input";
import defaultImage from "@assets/images/image_profile_01.svg";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, signUpSchema } from "./schema";
import {
  ErrorMessage,
  Flex,
  FlexCol,
  InputBox,
  ProfileImage,
  ProfileImageWrapper,
  StyledLabel,
  Tip,
  ButtonLabel,
} from "./SignUpStyle";

interface SignUpStepProps {
  onPrev: () => void;
}

export default function SignUpStepTwo({ onPrev }: SignUpStepProps) {
  const methods = useForm<signUpSchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { control } = useFormContext();

  return (
    <>
      <FlexCol>
        <div>
          <ProfileImageWrapper>
            <ProfileImage src={defaultImage} alt="프로필 이미지" />
          </ProfileImageWrapper>
          <Flex>
            <Button bgcolor="blue" textcolor="black">
              <ButtonLabel htmlFor="profileImage">
                프로필 사진 추가하기
              </ButtonLabel>
            </Button>
            <Controller
              name="profileImage"
              control={control}
              render={({ field }) => (
                <Input<signUpSchema>
                  type="file"
                  keyname="profileImage"
                  id="profileImage"
                  style={{ display: "none" }}
                  accept=".png, .jpeg, .jpg"
                  {...field}
                />
              )}
            />
          </Flex>
          <Tip>
            프로필 사진을 등록하지 않으시면 기본 프로필 이미지가 제공됩니다.
          </Tip>
        </div>
        <InputBox>
          <StyledLabel htmlFor="signupNickname">닉네임</StyledLabel>
          <Controller
            name="nickname"
            control={control}
            render={({ field }) => (
              <Input<signUpSchema>
                type="text"
                keyname="nickname"
                id="signupNickname"
                placeholder="사용할 닉네임을 두글자 이상 입력해 주세요."
                {...field}
              />
            )}
          />
          <ErrorMessage>{methods.formState.errors.email?.message}</ErrorMessage>
        </InputBox>
      </FlexCol>
      <Flex>
        <Button
          type="button"
          size="sm"
          bgcolor="black"
          textcolor="white"
          width="190px"
          onClickFnc={onPrev}
        >
          이전
        </Button>
        <Button
          type="submit"
          size="sm"
          bgcolor="green"
          textcolor="black"
          width="190px"
        >
          회원가입
        </Button>
      </Flex>
    </>
  );
}
