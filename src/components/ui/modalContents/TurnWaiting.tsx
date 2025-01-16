import imagePuzzle from "@assets/images/icon_puzzle.svg";
import {
  Container,
  Contents,
  ContentsContainer,
  Image,
} from "./turnWaitingStyle";

export default function TurnWaiting() {
  return (
    <>
      <Container>
        <Image src={imagePuzzle} alt="퍼즐 이미지" />
        <ContentsContainer>
          <Contents>상대부터 시작합니다.</Contents>
          <Contents>상대의 턴이 끝날때까지 잠시만 기다려 주세요.</Contents>
        </ContentsContainer>
      </Container>
    </>
  );
}
