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
  display: -webkit-box; /* Flex 컨테이너로 설정 */
  -webkit-box-orient: vertical; /* 텍스트를 세로 방향으로 클램핑 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* ... 처리 */
  -webkit-line-clamp: 2; /* 2줄로 제한 */
  line-clamp: 2; /* 최신 브라우저 지원 */
  word-break: break-word; /* 단어가 잘릴 때 줄바꿈 */
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
export { CardListForm, TitleBox, Button };
