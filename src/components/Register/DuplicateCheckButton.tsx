import { Button } from "../common/styles/Button.styles";
import { useCheckIdDuplicate } from "./hooks/useCheckIdDuplicate";

const DuplicateCheckButton = ({ id }: { id: string }) => {
  const { checkIdDuplicate } = useCheckIdDuplicate();
  return (
    <Button onClick={() => checkIdDuplicate(id)} type="button">
      중복확인
    </Button>
  );
};

export default DuplicateCheckButton;
