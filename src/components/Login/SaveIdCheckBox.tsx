import { useEffect } from "react";
import CheckBox from "../common/CheckBox";
import { useToggle } from "../../hooks/useToggle";
import { useChangeInput } from "./hooks/useChangeInput";
import { AuthState } from "../../types/auth";

interface SaveIdCheckBoxProps {
  id: AuthState["id"];
}

const ID = "id" as const;

const SaveIdCheckBox = ({ id }: SaveIdCheckBoxProps) => {
  const [saveId, onToggle] = useToggle(false);
  const { changeInputValue } = useChangeInput();

  useEffect(() => {
    const value = localStorage.getItem("ID");
    if (value == null) return;
    onToggle();
    changeInputValue("id", JSON.parse(value));
  }, []);

  useEffect(() => {
    if (saveId) {
      localStorage.setItem(ID, JSON.stringify(id));
    } else {
      localStorage.removeItem(ID);
    }
  }, [saveId, id]);

  return (
    <CheckBox label="아이디 저장" isChecked={saveId} onToggle={onToggle} />
  );
};

export default SaveIdCheckBox;
