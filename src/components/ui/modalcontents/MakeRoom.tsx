import { FormProvider, useForm } from "react-hook-form";
import Input from "../input/Input";
import * as S from "./makeRoomStyle";

export default function MakeRoom() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <S.testBox>
        <S.container>
          <S.title>방 만들기</S.title>
          <S.inputContainer>
            <S.label>방이름</S.label>
            <Input type="text" keyname="roomName" />
          </S.inputContainer>
          <S.warningContainer>
            욕설이나 이용자에게 불쾌감을 줄 수 있는 단어가 포함되지 않도록
            주의해 주세요.
          </S.warningContainer>
        </S.container>
      </S.testBox>
    </FormProvider>
  );
}
