import useModalStore from "@store/useModalStore";
import useToast from "@hooks/useToast";

export default function Home() {
  const { showModal, setShowModal } = useModalStore();
  const openToast = useToast();

  const onClickModal = () => {
    setShowModal(true);
    console.log(showModal);
  };

  const onClickToast = () => {
    openToast("나부터 시작합니다!");
  };

  return (
    <>
      <button onClick={onClickToast}>토스트</button>
      <br />
      <button onClick={onClickModal}>모달</button>
    </>
  );
}
