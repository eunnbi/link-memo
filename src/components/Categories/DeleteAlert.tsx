import React, { useEffect } from "react";
import { useDeleteCategory } from "./hooks/useDeleteCategory";
import Alert from "../common/Alert";
import { useAlert } from "../../hooks/useAlert";
import { CategoryId } from "../../types/category";

interface DeleteAlertProps {
  category: CategoryId;
  setCategory: React.Dispatch<CategoryId>;
}

const DeleteAlert = ({ category, setCategory }: DeleteAlertProps) => {
  const { categoryId } = category;
  const { show, onAlert, onClose } = useAlert();

  const onCancel = () => {
    onClose();
    setCategory({
      categoryId: 0,
    });
  };

  const { mutate, isLoading } = useDeleteCategory(onCancel);

  const onConfirm = () => {
    mutate({ categoryId });
  };

  // alert
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
      onConfirm={onConfirm}
      isLoading={isLoading}
    />
  );
};

export default DeleteAlert;
