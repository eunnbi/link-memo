import { useState } from "react";
import { usePostCategory } from "./usePostCategory";
import Modal from "../../common/Modals/Modal";
import { useForm } from "../../../hooks/useForm";

interface AddModalProps {
  onClose: () => void;
}

const AddModal = ({ onClose }: AddModalProps) => {
  const { form, onChange, initialize } = useForm({
    categoryName: "",
  });
  const [warningText, setWarningText] = useState("");

  const onCancel = () => {
    onClose();
    setWarningText("");
    initialize();
  };

  const { mutate, isLoading } = usePostCategory(onCancel);

  const onConfirm = () => {
    if (form.categoryName === "") {
      setWarningText("카테고리 이름을 입력해주세요.");
      return;
    }
    mutate({ categoryName: form.categoryName });
  };

  return (
    <Modal
      title={isLoading ? "카테고리 추가중..." : "카테고리 추가"}
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

export default AddModal;
