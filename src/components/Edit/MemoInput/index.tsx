import { useInputChange } from "../hooks/useInputChange";
import { Textarea } from "./MemoInput.styles";
import { useMemoInput } from "./useMemoInput";

const MemoInput = () => {
  const { content } = useMemoInput();
  const onChange = useInputChange();
  return (
    <Textarea
      value={content}
      name="content"
      onChange={onChange}
      cols={7}
      placeholder="간단한 메모를 기록해보세요 (어떤 점이 도움이 되었나요?)"
    />
  );
};

export default MemoInput;
