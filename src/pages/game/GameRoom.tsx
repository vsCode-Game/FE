import ChattingBox from "../../components/ui/card/chatting/Chatting";
// import ProfileCard from "../../components/ui/card/profileCard/ProfileCard";
import * as S from "./gameRoomStyle";

export default function GameRoom() {
  return (
    <S.container>
      <S.leftContainer>
        {/* <ProfileCard /> */}
        <ChattingBox />
      </S.leftContainer>
      <S.centerContainer>
        <S.guideBox></S.guideBox>
        <S.otherPlayerDeck></S.otherPlayerDeck>
        <S.selectNumberBox></S.selectNumberBox>
      </S.centerContainer>
      <S.rightContainer>
        <S.myDeckBox />
        {/* <ProfileCard /> */}
      </S.rightContainer>
    </S.container>
  );
}
