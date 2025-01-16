import heartImg from "../../../assets/images/icon_heart.svg";
import Button from "../../../components/ui/button/Button";

import { HeartImage, Message, Welcome, Wrapper } from "./finishStyle";

export default function Finish() {
  return (
    <Wrapper>
      <HeartImage src={heartImg} alt="가입완료 하트 이미지" />
      <Welcome>
        <p>환영합니다, 닉네임 님.</p>
        <p>가입이 완료되었습니다.</p>
      </Welcome>
      <Message>로그인 후 게임을 플레이 해 보세요!</Message>
      <Button
        type="submit"
        size="sm"
        bgcolor="green"
        textcolor="black"
        width="190px"
      >
        로그인 하러가기
      </Button>
    </Wrapper>
  );
}
