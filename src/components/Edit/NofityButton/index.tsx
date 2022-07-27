import BackButton from "../../common/BackButton";
import { useModal } from "../../../hooks/useModal";
import NotificationModal from "./NotificationModal";

const NotifyButton = () => {
  const { openModal } = useModal();
  const onClick = () => openModal(NotificationModal);

  return <BackButton onClick={onClick} />;
};

export default NotifyButton;
