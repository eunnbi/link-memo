import { useEffect, useState } from "react";
import { useAlert } from "../../../hooks/useAlert";
import { useForm } from "../../../hooks/useForm";
import { Category } from "../../../types/category";
import Alert from "../../common/Alert";
import { useEditCategory } from "./hooks/useEditCategory";

interface EditAlertProps {
  category: Category;
  setCategory: React.Dispatch<
    React.SetStateAction<{
      categoryId: number;
      categoryName: string;
    }>
  >;
}

const EditAlert = ({ category, setCategory }: EditAlertProps) => {
  const { categoryId, categoryName } = category;
  const { show, onAlert, onClose } = useAlert();
  const { form, onChange, initialize, setForm } = useForm({
    categoryName: "",
  });
  const [warningText, setWarningText] = useState("");
  const onCancel = () => {
    onClose();
    initialize();
    setWarningText("");
    setCategory({
      categoryId: 0,
      categoryName: "",
    });
  };
  const { editCategory, isLoading } = useEditCategory(onCancel);

  const onConfirm = () => {
    if (form.categoryName === "") {
      setWarningText("카테고리 이름을 입력하세요.");
      return;
    }
    editCategory(categoryId, form.categoryName);
  };

  useEffect(() => {
    if (categoryId === 0 || categoryName === "") return;
    setForm({
      categoryName,
    });
    onAlert();
  }, [categoryId, categoryName]);

  return (
    <Alert
      show={show}
      title={isLoading ? "카테고리 수정 중..." : "카테고리 수정"}
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

export default EditAlert;
