import styled from "styled-components";

const CardListForm = styled.div`
  width: 500px;
  position: relative;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  height: 260px;
  padding: 30px 24px;
`;
const TitleBox = styled.div`
  margin-top: 20px;
  margin-bottom: 8px;
`;
const ProfileBox = styled.div`
  display: flex;
  line-height: 30px;
  gap: 10px;
`;
const Profile = styled.div`
  width: 30px;
  position: relative;
  border: 2px solid #dedfe0;
  border-radius: 50%;
  max-width: 100%;
  overflow: hidden;
  height: 30px;
  object-fit: cover;
`;
const Button = styled.button`
  width: 150px;
  position: relative;
  border-radius: 50px;
  background: radial-gradient(50% 50% at 50% 50%, #2571ff, #fff);
  border: 1px solid #000;
  box-sizing: border-box;
  height: 50px;
  margin-top: 40px;
  margin-left: 290px;
  text-align: center;
`;
export default function CardList() {
  return (
    <CardListForm>
      <div>
        <TitleBox>스겜 한판 하쉴? ㄱㄱ</TitleBox>
        <ProfileBox>
          <Profile></Profile>
          <div>드루와이키키</div>
        </ProfileBox>
      </div>
      <Button>참여하기</Button>
    </CardListForm>
  );
}
