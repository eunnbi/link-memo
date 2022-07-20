import React, { useEffect } from "react";
import { useDeleteCategory } from "./hooks/useDeleteCategory";
import Alert from "../../common/Alert";
import { useAlert } from "../../../hooks/useAlert";

interface DeleteAlertProps {
  categoryId: number;
  setCategoryId: React.Dispatch<React.SetStateAction<number>>;
}

const DeleteAlert = ({ categoryId, setCategoryId }: DeleteAlertProps) => {
  const { show, onAlert, onClose } = useAlert();

  const onCancel = () => {
    onClose();
    setCategoryId(0);
  };

  const { removeCategory, isLoading } = useDeleteCategory(onCancel);

  useEffect(() => {
    if (categoryId === 0) return;
    onAlert();
  }, [categoryId]);

  return (
    <Alert
      show={show}
      title={isLoading ? "카테고리 삭제 중..." : "카테고리 삭제"}
      message="해당 카테고리에 포함된 모든 메모들도 함께 삭제됩니다."
      onCancel={onCancel}
      onConfirm={() => removeCategory(categoryId)}
    />
  );
};

export default DeleteAlert;
