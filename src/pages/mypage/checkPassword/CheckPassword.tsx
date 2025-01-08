import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../components/ui/input/Input";
import * as S from "./checkPasswordStyle";
import Button from "../../../components/ui/button/Button";
import { ICheckPassword } from "./schema";
import { useNavigate } from "react-router-dom";
import { allowedNodeEnvironmentFlags } from "node:process";

export default function CheckPassword() {
  const methods = useForm<ICheckPassword>();
  const navigate = useNavigate();
  const onClickSubmit = async (data: ICheckPassword) => {
    console.log(data);
    navigate("/user/mypage/updateMyPage");
  };

  return (
    <FormProvider {...methods}>
      <S.container>
        <S.checkPasswordBox onSubmit={methods.handleSubmit(onClickSubmit)}>
          <S.p>본인 인증을 위해 비밀번호 확인이 필요합니다.</S.p>
          <S.p>비밀번호를 입력해 주세요.</S.p>
          <S.label>비밀번호</S.label>
          <Input<ICheckPassword> type="text" keyname="password" />
          <S.buttonBox>
            <Button type="button" size="sm" bgcolor="black" textcolor="white">
              이전
            </Button>
            <Button type="submit" size="sm" bgcolor="green" textcolor="black">
              다음
            </Button>
          </S.buttonBox>
        </S.checkPasswordBox>
      </S.container>
    </FormProvider>
  );
}
