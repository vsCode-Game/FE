import {
  FullBox,
  H1,
  Hr,
  MainTextBox,
  TrophyBox,
  TrophyImage,
  Wrapper,
} from "./rankingPageStyle";
import trophy from "../../assets/images/icon_trophy.svg";
import RankingList from "../../components/ui/ranking/RankingList";
// import RankingList from "../../components/ui/ranking/RankingList";

export default function RangkingPage() {
  return (
    <Wrapper>
      <FullBox>
        <TrophyBox>
          <TrophyImage src={trophy} alt="랭킹 트로피 이미지" />
          <H1>전체 랭킹</H1>
        </TrophyBox>
        <MainTextBox>
          <div>닉네임</div>
          <div>순위</div>
        </MainTextBox>
        <Hr />
        {/* {data?.ranking.map((user, index) => (
        <RankingList nickname={user.userNickname} index={index} />
      ))} */}
        <RankingList></RankingList>
      </FullBox>
    </Wrapper>
  );
}
