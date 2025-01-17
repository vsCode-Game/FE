import Button from "../button/Button";
import { useModal } from "@hooks/useModal";
import { Container, Message } from "./alertStyle";

interface IAlertConfirmProps {
  message: string;
}

export default function Alert({ message }: IAlertConfirmProps) {
  const { closeModal } = useModal();

  const onClickCancel = () => {
    closeModal();
  };

  return (
    <Container>
      <Message>{message}</Message>
      <Button
        type="button"
        size="md"
        textcolor="black"
        bgcolor="green"
        width="200px"
        onClick={onClickCancel}
      >
        확인
      </Button>
    </Container>
  );
}
