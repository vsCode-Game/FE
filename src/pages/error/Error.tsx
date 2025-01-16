import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import CircleBackground from "../../components/ui/circleBackground/CircleBackground";
import {
  ErrorContainer,
  ErrorDescription,
  ErrorWrapper,
  ErrorTitle,
} from "./errorStyle";

export default function Error() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <ErrorWrapper>
      <CircleBackground />
      <ErrorContainer>
        <ErrorTitle>알 수 없는 오류가 발생했어요.</ErrorTitle>
        <ErrorDescription>
          죄송합니다. 요청을 처리하지 못했어요. 잠시 뒤에 다시 시도해 주세요.
        </ErrorDescription>
        <Button
          type="button"
          size="md"
          textcolor="black"
          bgcolor="blue"
          width="320px"
          onClick={onClickBack}
        >
          뒤로 가기
        </Button>
      </ErrorContainer>
    </ErrorWrapper>
  );
}
