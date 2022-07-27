import { Button } from "../../common/styles/Button.styles";
import { useCheckIdDuplicate } from "./useCheckIdDuplicate";
import { useRegisterState } from "../hooks/useRegisterState";

const DuplicateCheckButton = () => {
  const { id } = useRegisterState();
  const { checkIdDuplicate } = useCheckIdDuplicate();
  return (
    <Button onClick={() => checkIdDuplicate(id)} type="button">
      중복확인
    </Button>
  );
};

export default DuplicateCheckButton;
