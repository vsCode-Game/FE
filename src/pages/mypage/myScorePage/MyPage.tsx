import Button from "../../../components/ui/button/Button";
import medalImage from "../../../assets/images/icon_medal.svg";
import heartBlueImage from "../../../assets/images/icon_heart_blue.svg";
import heartRedImage from "../../../assets/images/icon_heart_red.svg";
import * as S from "./myPageStyle";

export default function MyPage() {
  return (
    <S.PullBox>
      <S.H1>마이페이지</S.H1>
      <S.ProfileBox>
        <S.ProfilePhoto></S.ProfilePhoto>
        <S.NickNameTextBox>
          <S.NickNameText>nickname님,</S.NickNameText>
          <S.HelloText>안녕하세요.</S.HelloText>
        </S.NickNameTextBox>
      </S.ProfileBox>
      <Button type="button" size="sm" bgcolor="blue" textcolor="black">
        내 정보 수정
      </Button>
      <S.MyRanking>
        <S.H2>나의랭킹</S.H2>
        <S.MedalRankingBox>
          <img src={medalImage} alt="medal" />
          <S.RankingBox>
            <S.Ranking>
              <S.Number>78</S.Number>
              <S.Text>위</S.Text>
            </S.Ranking>
            <S.TotalRankingPage>전체 랭킹 보러가기→</S.TotalRankingPage>
          </S.RankingBox>
        </S.MedalRankingBox>
      </S.MyRanking>
      <S.ScoreBoard>
        <S.H3>나의 기록</S.H3>
        <S.ScoreBox>
          <S.BlueHreartBox>
            <S.HeartBlueImg src={heartBlueImage} alt="heartBlue" />
            <S.ScoreWin>12</S.ScoreWin>
            <S.Win>승</S.Win>
          </S.BlueHreartBox>
          <S.RedHeartBox>
            <S.HeartRedImg src={heartRedImage} alt="heartRed" />
            <S.ScoreLose>5</S.ScoreLose>
            <S.Lose>패</S.Lose>
          </S.RedHeartBox>
        </S.ScoreBox>
      </S.ScoreBoard>
    </S.PullBox>
  );
}
