import ModalPortal from "./ModalPortal";
import { Inside, Modal } from "./modalStyle";

export default function ModalFrame() {
  return (
    <ModalPortal>
      <Modal>
        <Inside>모달!!!!!!!!!!!!!!!</Inside>
      </Modal>
    </ModalPortal>
  );
}
