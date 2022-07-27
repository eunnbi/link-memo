import Modal from "../../common/Modals/Modal";
import { useDeleteLinkMemo } from "./useDeleteLinkMemo";

interface DeleteModalProps {
  memoId: number;
  onClose: () => void;
}

const DeleteModal = ({ memoId, onClose }: DeleteModalProps) => {
  const { mutate, isLoading } = useDeleteLinkMemo(onClose);
  const onConfirm = () => mutate({ memoId });

  return (
    <Modal
      title={isLoading ? "링크 메모 삭제 중..." : "링크 메모 삭제"}
      message="한번 삭제한 링크 메모는 복구할 수 없습니다."
      onCancel={onClose}
      onConfirm={onConfirm}
      isLoading={isLoading}
    />
  );
};

export default DeleteModal;
