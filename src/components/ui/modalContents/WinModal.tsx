import Button from "../button/Button";
import * as S from "./winModalStyle";
import winImage from "../../../assets/images/kissing_cat.svg";
import { useModal } from "../../../hooks/useModal";
import { useNavigate } from "react-router-dom";

export default function WinModal() {
  const { closeModal } = useModal();

  const navigate = useNavigate();

  const onClickLeave = () => {
    navigate("/game");
  };

  const onClickClose = () => {
    closeModal();
  };

  return (
    <S.container>
      <S.imgBox>
        <img src={winImage} alt="win" width={150} height={150} />
      </S.imgBox>
      <S.textBox>You Win !</S.textBox>
      <S.btnBox>
        <Button
          type="button"
          size="l"
          bgcolor="black"
          textcolor="white"
          onClick={onClickLeave}
        >
          나가기
        </Button>
        <Button
          type="button"
          size="l"
          bgcolor="green"
          textcolor="black"
          onClick={onClickClose}
        >
          한번 더 하기
        </Button>
      </S.btnBox>
    </S.container>
  );
}
