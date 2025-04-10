import Button from "../button/Button";
import * as S from "./winModalStyle";
import loseImage from "../../../assets/images/crying_cat.svg";
import { useModal } from "../../../hooks/useModal";
import { useNavigate } from "react-router-dom";

export default function LoseModal() {
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
        <img src={loseImage} alt="win" width={150} height={150} />
      </S.imgBox>
      <S.textBox>Game Over</S.textBox>
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
