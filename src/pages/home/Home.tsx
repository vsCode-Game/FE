import useToast from "@hooks/useToast";
import { useModal } from "../../hooks/useModal";

export default function Home() {
  const openToast = useToast();
  const { openModal } = useModal();

  const onClickModal = () => {
    openModal("selectDeck", "white");
  };

  const onClickToast = () => {
    openToast("나부터 시작합니다!");
  };

  const onClickToast2 = () => {
    openToast("나부터 시작합니다!");
  };

  const onClickToast3 = () => {
    openToast("나부터 시작합니다!");
  };

  const onClickToast4 = () => {
    openToast("나부터 시작합니다!");
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={onClickToast}>토스트</button>
      <br />
      <button onClick={onClickToast2}>토스트2</button>
      <br />
      <button onClick={onClickToast3}>토스트3</button>
      <br />
      <button onClick={onClickToast4}>토스트4</button>
      <br />
      <button onClick={onClickModal}>모달</button>
    </>
  );
}
