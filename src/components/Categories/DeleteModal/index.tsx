import { useDeleteCategory } from "./useDeleteCategory";
import Modal from "../../common/Modals/Modal";

interface DeleteModalProps {
  categoryId: number;
  onClose: () => void;
}

const DeleteModal = ({ categoryId, onClose }: DeleteModalProps) => {
  const { mutate, isLoading } = useDeleteCategory(onClose);

  const onConfirm = () => {
    mutate({ categoryId });
  };

  return (
    <Modal
      title={isLoading ? "카테고리 삭제 중..." : "카테고리 삭제"}
      message="해당 카테고리에 포함된 모든 메모들도 함께 삭제됩니다."
      onCancel={onClose}
      onConfirm={onConfirm}
      isLoading={isLoading}
    />
  );
};

export default DeleteModal;
