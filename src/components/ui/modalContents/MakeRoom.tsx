import Input from "../input/Input";
import Button from "../button/Button";
import * as S from "./makeRoomStyle";
import { FormProvider, useForm } from "react-hook-form";
import { useModal } from "@hooks/useModal";
import { IRoomNameSchema } from "./schema";
import { useCreateRoomMutation } from "@hooks/useMutation";

export default function MakeRoom() {
  const methods = useForm();
  const mutation = useCreateRoomMutation();
  const { closeModal } = useModal();

  const onClickClose = () => {
    closeModal();
  };

  const onClickMakeRoom = async (data: IRoomNameSchema) => {
    const result = mutation.mutate(data);
    console.log(result);
  };

  return (
    <FormProvider {...methods}>
      <S.container>
        <S.title>방 만들기</S.title>
        <S.inputContainer>
          <S.label>방 이름</S.label>
          <Input type="text" keyname="roomName" />
        </S.inputContainer>
        <S.warningContainer>
          욕설이나 이용자에게 불쾌감을 줄 수 있는 단어가 포함되지 않도록 주의해
          주세요.
        </S.warningContainer>
        <S.buttonContainer>
          <Button
            type="button"
            size="l"
            textcolor="white"
            bgcolor="black"
            onClick={onClickClose}
            width="50%"
          >
            닫기
          </Button>

          <Button
            type="button"
            size="l"
            textcolor="black"
            bgcolor="green"
            onClick={onClickMakeRoom}
            width="50%"
          >
            방 만들기
          </Button>
        </S.buttonContainer>
      </S.container>
    </FormProvider>
  );
}
