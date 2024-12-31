// import BadgeYellow from "../../badge/BadgeYellow";
// import Nickname from "../../nickname/NickNameBox";

import Badge from "../../badge/Badge";
import Nickname from "../../nickname/NickNameBox";
import { Button, CardListForm, TitleBox } from "./CardListStyle";

// const CardListForm = styled.div`
//   width: 500px;
//   position: relative;
//   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 20px;
//   background-color: #fff;
//   border: 2px solid #000;
//   box-sizing: border-box;
//   height: 260px;
//   padding: 30px 24px;
// `;
// const TitleBox = styled.div`
//   margin-top: 20px;
//   margin-bottom: 8px;
// `;

// const Button = styled.button`
//   width: 150px;
//   position: relative;
//   border-radius: 50px;
//   background: radial-gradient(50% 50% at 50% 50%, #2571ff, #fff);
//   border: 1px solid #000;
//   box-sizing: border-box;
//   height: 50px;
//   margin-top: 40px;
//   margin-left: 290px;
//   text-align: center;
// `;

export default function CardList() {
  return (
    <CardListForm>
      <div>
        <Badge status="waiting..." />
        <TitleBox>
          스겜 한판 하쉴? ㄱㄱ 1명 선착순 받습니다 빨리오세요 매너겜 하실 분
          환영
          나이라어리하넘ㅈ;ㅣㅏㄴㅇㄹ히ㅏㅗㅁ니아러ㅣㅏㅓㄴㅇ롷;ㅁ니아러미라ㅓㅏㅁ넝라.ㅓㅠㅁㄴ아ㅓ류ㅣㅏㅁㄴㅇ
        </TitleBox>
        <Nickname></Nickname>
      </div>
      <Button>참여하기</Button>
    </CardListForm>
  );
}
