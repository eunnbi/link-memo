import styled from "styled-components";
import CategorySelectBox from "../CategorySelectBox";
import LinkInputs from "../LinkInputs";
import MemoInput from "../MemoInput";
import { Button } from "../../common/styles/Button.styles";
import { useEdit } from "./useEdit";
import { useInitialize } from "./useInitialize";

interface EditFormProps {
  id: number | undefined;
}

const EditForm = ({ id }: EditFormProps) => {
  const { onEdit, warningText, postLoading, patchLoading } = useEdit(id);
  useInitialize();

  return (
    <Form onSubmit={onEdit}>
      <LinkInputs />
      <CategorySelectBox />
      <MemoInput />
      <div>
        {warningText !== "" && <Text>{warningText}</Text>}
        <SubmitButton
          type="submit"
          disabled={postLoading || patchLoading ? true : false}
        >
          {id
            ? patchLoading
              ? "수정하는 중..."
              : "수정하기"
            : postLoading
            ? "저장하는 중..."
            : "저장하기"}
        </SubmitButton>
      </div>
    </Form>
  );
};

export default EditForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 0.7rem 0;
`;

const Text = styled.p`
  font-size: 1rem;
  color: red;
  margin-bottom: 0.5rem;
`;
