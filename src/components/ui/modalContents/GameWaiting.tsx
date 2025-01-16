import Loading from "../loading/Loading";
import { Container, Contents, ContentsContainer } from "./gameWaitingStyle";

export default function GameWaiting() {
  return (
    <>
      <Container>
        <Loading overlay={false} />
        <ContentsContainer>
          <Contents>잠시 후 게임이 시작됩니다.</Contents>
          <Contents>조금만 기다려 주세요. 😊</Contents>
        </ContentsContainer>
      </Container>
    </>
  );
}
