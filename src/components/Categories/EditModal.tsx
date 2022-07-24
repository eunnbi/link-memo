import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Category } from "../../types/category";
import Modal from "../common/Modals/Modal";
import { usePatchCategory } from "./hooks/usePatchCategory";

interface EditModalProps {
  category: Category;
  onClose: () => void;
}

const EditModal = ({ category, onClose }: EditModalProps) => {
  const { categoryId } = category;
  const { form, onChange, initialize } = useForm({
    categoryName: category.categoryName,
  });
  const [warningText, setWarningText] = useState("");

  const onCancel = () => {
    onClose();
    initialize();
    setWarningText("");
  };

  const { mutate, isLoading } = usePatchCategory(onCancel);
  const onConfirm = () => {
    if (form.categoryName === "") {
      setWarningText("카테고리 이름을 입력하세요.");
      return;
    }
    mutate({ categoryId, categoryName: form.categoryName });
  };

  return (
    <Modal
      title={isLoading ? "카테고리 수정 중..." : "카테고리 수정"}
      name="categoryName"
      value={form.categoryName}
      placeholder="카테고리 이름"
      warningText={warningText}
      onChange={onChange}
      onCancel={onCancel}
      onConfirm={onConfirm}
      isLoading={isLoading}
    />
  );
};

export default EditModal;
