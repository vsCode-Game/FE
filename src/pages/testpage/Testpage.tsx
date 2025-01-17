import { useModal } from "../../hooks/useModal";

export default function TestPage() {
  const { openModal } = useModal();
  const onClickModal = () => {
    openModal("guessNumber", "blue");
  };
  return (
    <div onClick={onClickModal}>ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ</div>
  );
}
