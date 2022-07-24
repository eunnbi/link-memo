import { AuthState } from "../../types/auth";
import CheckBox from "../common/CheckBox";
import { useSaveId } from "./useSaveId";

interface SaveIdCheckBoxProps {
  id: AuthState["id"];
  setForm: React.Dispatch<AuthState>;
}

const SaveIdCheckBox = ({ id, setForm }: SaveIdCheckBoxProps) => {
  const [saveId, handleSaveId] = useSaveId(id, setForm);
  return (
    <CheckBox label="아이디 저장" isChecked={saveId} onToggle={handleSaveId} />
  );
};

export default SaveIdCheckBox;
