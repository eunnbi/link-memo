import { AuthState } from "../../types/auth";
import CheckBox from "../common/CheckBox";
import { useSaveId } from "./hooks/useSaveId";

interface SaveIdCheckBoxProps {
  id: AuthState["id"];
}

const SaveIdCheckBox = ({ id }: SaveIdCheckBoxProps) => {
  const [saveId, handleSaveId] = useSaveId(id);
  return (
    <CheckBox label="아이디 저장" isChecked={saveId} onToggle={handleSaveId} />
  );
};

export default SaveIdCheckBox;
