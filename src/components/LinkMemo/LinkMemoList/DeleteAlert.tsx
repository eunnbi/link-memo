import { useEffect } from "react";
import { useAlert } from "../../../hooks/useAlert";
import { LinkMemoId } from "../../../types/linkMemo";
import Alert from "../../common/Alert";
import { useDeleteLinkMemo } from "./useDeleteLinkMemo";

interface DeleteAlertProps {
  linkMemo: LinkMemoId;
  setLinkMemo: React.Dispatch<LinkMemoId>;
}

const DeleteAlert = ({ linkMemo, setLinkMemo }: DeleteAlertProps) => {
  const { memoId } = linkMemo;
  const { show, onAlert, onClose } = useAlert();
  const { mutate, isLoading } = useDeleteLinkMemo(onClose);

  const onCancel = () => {
    onClose();
    setLinkMemo({
      memoId: 0,
    });
  };

  const onConfirm = () => mutate({ memoId });

  useEffect(() => {
    if (memoId) {
      onAlert();
    }
  }, [memoId]);

  return (
    <Alert
      show={show}
      title={isLoading ? "링크 메모 삭제 중..." : "링크 메모 삭제"}
      message="한번 삭제한 링크 메모는 복구할 수 없습니다."
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default DeleteAlert;
