import CheckBox from "../../common/CheckBox";
import { useSaveId } from "./useSaveId";

const SaveIdCheckBox = () => {
  const { saveId, onToggle } = useSaveId();

  return (
    <CheckBox label="아이디 저장" isChecked={saveId} onToggle={onToggle} />
  );
};

export default SaveIdCheckBox;
