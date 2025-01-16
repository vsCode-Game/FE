import styled from "styled-components";

const PullBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  color: var(--gray-999, #000);
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ProfilePhoto = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 2px solid #aaa;
`;
const ProfileBox = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 30px;
  align-items: center;
`;
const NickNameTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const NickNameText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px; /* 141.667% */
`;
const HelloText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`;
const MyRanking = styled.div`
  width: 100%;
  height: 180px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #000;
  color: var(--color-primary);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 25px 15px 25px 5px;
`;
const H2 = styled.h2`
  width: 73px;
  height: 23px;
  flex-shrink: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  margin-left: 10px;
  margin-bottom: 20px;
`;
const MedalRankingBox = styled.div`
  display: flex;
  gap: 156px;
`;
const RankingBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 14px;
`;
const Ranking = styled.div`
  display: flex;
`;
const Number = styled.div`
  width: 50px;
  color: #000;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 7.2px;
  margin-top: 2px;
`;
const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 4.8px;
  width: 21px;
  height: 29px;
  margin-top: 10px;
`;
const TotalRankingPage = styled.div`
  width: 124px;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;
const ScoreBoard = styled.div`
  width: 100%;
  height: 180px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #000;
  color: var(--color-yellow-900);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
const H3 = styled.h3`
  width: 73px;
  height: 25px;
  flex-shrink: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  margin-top: 25px;
  margin-left: 15px;
  margin-bottom: 34px;
`;
const ScoreBox = styled.div`
  display: flex;
  gap: 110px;
  justify-content: center;
  align-items: center;
`;
const BlueHreartBox = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  gap: 10px;
`;

const HeartBlueImg = styled.img`
  width: 30px;
  height: 30px;
`;

const ScoreWin = styled.div`
  color: var(--color-gray-999);
  font-size: 36px;
  font-weight: 500;
`;
const Win = styled.div`
  color: var(--color-gray-999);
  font-size: 20px;
  font-weight: 500;
`;
const RedHeartBox = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  gap: 10px;
`;
const HeartRedImg = styled.img`
  width: 30px;
  height: 30px;
`;
const ScoreLose = styled.div`
  color: var(--color-gray-999);
  font-size: 36px;
  font-weight: 500;
`;
const Lose = styled.div`
  color: var(--color-gray-999);
  font-size: 20px;
  font-weight: 500;
`;

export {
  PullBox,
  H1,
  ProfilePhoto,
  ProfileBox,
  NickNameTextBox,
  NickNameText,
  HelloText,
  MyRanking,
  H2,
  MedalRankingBox,
  RankingBox,
  Ranking,
  Number,
  Text,
  TotalRankingPage,
  ScoreBoard,
  H3,
  ScoreBox,
  BlueHreartBox,
  HeartBlueImg,
  ScoreWin,
  Win,
  RedHeartBox,
  HeartRedImg,
  ScoreLose,
  Lose,
};
