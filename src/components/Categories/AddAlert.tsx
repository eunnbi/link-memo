import { useState } from "react";
import { usePostCategory } from "./hooks/usePostCategory";
import Alert from "../common/Alert";
import { useForm } from "../../hooks/useForm";

interface AddAlertProps {
  show: boolean;
  onClose: () => void;
}

const AddAlert = ({ show, onClose }: AddAlertProps) => {
  const { form, onChange, initialize } = useForm({
    categoryName: "",
  });
  const [warningText, setWarningText] = useState("");

  const onCancel = () => {
    onClose();
    setWarningText("");
    initialize();
  };

  const { mutate, status } = usePostCategory(onCancel);

  const onConfirm = () => {
    if (form.categoryName === "") {
      setWarningText("카테고리 이름을 입력해주세요.");
      return;
    }
    mutate({ categoryName: form.categoryName });
  };

  return (
    <Alert
      show={show}
      title={status === "loading" ? "카테고리 추가중..." : "카테고리 추가"}
      name="categoryName"
      value={form.categoryName}
      placeholder="카테고리 이름"
      warningText={warningText}
      onChange={onChange}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default AddAlert;
