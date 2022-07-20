import Alert from "../../common/Alert";
import CheckBox from "../../common/CheckBox";
import { useGoBack } from "../../../hooks/useGoBack";
import { useAlert } from "../../../hooks/useAlert";
import { useNotification } from "./useNotification";
import BackButton from "../../common/BackButton";

const NotificationButton = () => {
  const goBack = useGoBack();
  const { show, onAlert, onClose } = useAlert();
  const { showNotification, onToggle } = useNotification();

  return (
    <>
      <BackButton onClick={onAlert} />

      <Alert
        show={show}
        title="페이지를 나가시겠습니까?"
        message="📢 이 페이지를 나가면 작성했던 기록들이 사라집니다."
        onConfirm={goBack}
        onCancel={onClose}
        checkBox={
          <CheckBox
            isChecked={!showNotification}
            onToggle={onToggle}
            label="다시보지 않기"
          />
        }
      />
    </>
  );
};

export default NotificationButton;
