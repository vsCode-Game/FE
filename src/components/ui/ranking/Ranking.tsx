import styled from "styled-components";

const FullBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TrophyImage = styled.img`
  width: 100%;
  height: 100px;
`;
const MainTextBox = styled.div`
  display: flex;
  margin-top: 45px;
`;
const Hr = styled.hr`
  width: 100%;
  position: relative;
  border-top: 2px solid #000;
  box-sizing: border-box;
  height: 2px;
`;
export default function Rangking() {
  return (
    <FullBox>
      <TrophyImage src="/trophy.png" alt="트로피 이미지" />
      <h1>전체 랭킹</h1>
      <MainTextBox>
        <div>닉네임</div>
        <div>순위</div>
        <Hr />
      </MainTextBox>
    </FullBox>
  );
}
