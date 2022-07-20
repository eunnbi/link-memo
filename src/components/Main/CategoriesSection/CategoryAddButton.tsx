import { useState } from "react";
import { useAlert } from "../../../hooks/useAlert";
import { useForm } from "../../../hooks/useForm";
import Alert from "../../common/Alert";
import PlusButton from "../../common/PlusButton";
import { useAddCategory } from "./hooks/useAddCategory";

const CategoryAddButton = () => {
  const { show, onAlert, onClose } = useAlert();
  const { form, onChange, initialize } = useForm({
    categoryName: "",
  });
  const [warningText, setWarningText] = useState("");

  const onCancel = () => {
    onClose();
    setWarningText("");
    initialize();
  };

  const { addCategory, status } = useAddCategory(onCancel);
  const onConfirm = () => {
    if (form.categoryName === "") {
      setWarningText("카테고리 이름을 입력해주세요.");
      return;
    }
    addCategory(form.categoryName);
  };
  return (
    <>
      <PlusButton onClick={onAlert} />
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
    </>
  );
};

export default CategoryAddButton;
