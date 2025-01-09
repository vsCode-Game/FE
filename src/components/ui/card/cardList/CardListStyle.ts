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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  word-break: break-word;
  color: var(--gray-999, #000);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2px;
`;
export { CardListForm, TitleBox, ButtonDiv };
