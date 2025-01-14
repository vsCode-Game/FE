import useModalStore from "@store/useModalStore";

export default function Home() {
  const { showModal, setShowModal } = useModalStore();

  const onClickModal = () => {
    setShowModal(true);
    console.log(showModal);
  };

  return <button onClick={onClickModal}>모달</button>;
}
