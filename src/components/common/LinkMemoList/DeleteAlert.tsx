import { useEffect } from "react";
import { useAlert } from "../../../hooks/useAlert";
import Alert from "../Alert";

interface DeleteAlertProps {
  memoId: number;
  setMemoId: React.Dispatch<React.SetStateAction<number>>;
}

const DeleteAlert = ({ memoId, setMemoId }: DeleteAlertProps) => {
  const { show, onAlert, onClose } = useAlert();

  const onCancel = () => {
    onClose();
    setMemoId(0);
  };

  useEffect(() => {
    if (memoId) {
      onAlert();
    }
  }, [memoId]);
  return (
    <Alert
      show={show}
      title="링크 메모 삭제"
      message="한번 삭제한 링크 메모는 복구할 수 없습니다."
      onCancel={onCancel}
      onConfirm={onCancel}
    />
  );
};

export default DeleteAlert;
