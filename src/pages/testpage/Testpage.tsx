import { useModal } from "../../hooks/useModal";

export default function TestPage() {
  const { openModal } = useModal();
  const onClickModal = () => {
    openModal("selectTurn", "blue");
  };
  return (
    <div onClick={onClickModal}>ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ</div>
  );
}
