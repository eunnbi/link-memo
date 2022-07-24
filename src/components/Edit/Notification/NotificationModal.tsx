import Modal from "../../common/Modals/Modal";
import CheckBox from "../../common/CheckBox";
import { useGoBack } from "../../../hooks/useGoBack";
import { useNotification } from "./useNotification";

interface NotificationModalProps {
  onClose: () => void;
}

const NotificationModal = ({ onClose }: NotificationModalProps) => {
  const goBack = useGoBack();
  const { showNotification, onToggle } = useNotification();
  const onConfirm = () => {
    goBack();
    onClose();
  };
  return (
    <Modal
      title="페이지를 나가시겠습니까?"
      message="📢 이 페이지를 나가면 작성했던 기록들이 사라집니다."
      onConfirm={onConfirm}
      onCancel={onClose}
      checkBox={
        <CheckBox
          isChecked={!showNotification}
          onToggle={onToggle}
          label="다시보지 않기"
        />
      }
    />
  );
};

export default NotificationModal;
