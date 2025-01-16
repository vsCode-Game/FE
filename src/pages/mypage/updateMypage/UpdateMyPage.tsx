import { FormProvider, useForm } from "react-hook-form";
import Button from "../../../components/ui/button/Button";
import Input from "../../../components/ui/input/Input";
import * as S from "./updateMyPageStyle";
import { schema, UpdateMyPageType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UpdateMyPage() {
  const methods = useForm<UpdateMyPageType>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = (data: UpdateMyPageType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <S.container>
        <S.contentsBox onSubmit={methods.handleSubmit(onClickSubmit)}>
          <S.imgBox>
            <S.title>내 정보 수정</S.title>
            <S.img></S.img>
            <Button type="button" bgcolor="blue" textcolor="black" size="sm">
              프로필 사진 수정
            </Button>
          </S.imgBox>
          <S.inputBox>
            <S.label>이메일</S.label>
            <Input
              type="text"
              keyname="email"
              defaultValue="abc@sample.com"
              disable={true}
            />
          </S.inputBox>
          <S.inputBox>
            <S.label>비밀번호</S.label>
            <Input<UpdateMyPageType> type="password" keyname="password" />
            <S.errorMessage>
              {methods.formState.errors.password?.message}
            </S.errorMessage>
          </S.inputBox>
          <S.inputBox>
            <S.label>비밀번호 확인</S.label>
            <Input<UpdateMyPageType> type="password" keyname="checkPassword" />
            <S.errorMessage>
              {methods.formState.errors.checkPassword?.message}
            </S.errorMessage>
          </S.inputBox>
          <S.inputBox>
            <S.label>닉네임</S.label>
            <Input<UpdateMyPageType> type="text" keyname="nickname" />
            <S.errorMessage>
              {methods.formState.errors.nickname?.message}
            </S.errorMessage>
          </S.inputBox>
          <S.buttonBox>
            <Button type="button" bgcolor="black" textcolor="white" size="sm">
              이전
            </Button>
            <Button type="submit" bgcolor="green" textcolor="black" size="sm">
              다음
            </Button>
          </S.buttonBox>
        </S.contentsBox>
      </S.container>
    </FormProvider>
  );
}
