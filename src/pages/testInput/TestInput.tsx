import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/ui/input/Input";
import { IRoomNameSchema } from "./schema";
import { useCreateRoomMutation } from "../../hooks/useMutation";

export function TestInput() {
  const methods = useForm<IRoomNameSchema>();
  const mutation = useCreateRoomMutation();
  const onClickSubmit = async (data: IRoomNameSchema) => {
    console.log("방만들기실행");
    mutation.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        <Input<IRoomNameSchema> type="text" keyname="roomName" />
        <button>방만들기</button>
      </form>
    </FormProvider>
  );
}
