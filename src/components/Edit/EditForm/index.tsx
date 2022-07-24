import { useState } from "react";
import styled from "styled-components";
import { useInitialize } from "./useInitialize";
import { usePostLinkMemo } from "./usePostLinkMemo";
import { usePatchLinkMemo } from "./usePatchLinkMemo";
import { useInputValue } from "../hooks/useInputValue";
import CategorySelectBox from "../CategorySelectBox";
import LinkInputs from "../LinkInputs";
import MemoInput from "../MemoInput";
import { Button } from "../../common/styles/Button.styles";

interface EditFormProps {
  id?: number;
}

const EditForm = ({ id }: EditFormProps) => {
  const [warningText, setWarningText] = useState("");
  const { linkName, linkUrl, content, category } = useInputValue();
  const { mutate: postMutate, isLoading: postLoading } = usePostLinkMemo();
  const { mutate: patchMutate, isLoading: patchLoading } = usePatchLinkMemo();

  const onEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (linkName === "") {
      setWarningText("링크 이름은 필수 입력 항목입니다.");
      return;
    }
    if (linkUrl === "") {
      setWarningText("링크 주소는 필수 입력 항목입니다.");
      return;
    }
    if (id) {
      patchMutate({
        linkName,
        linkUrl,
        content,
        categoryId: Number(category.categoryId),
        categoryName: category.categoryName,
        memoId: id,
      });
    } else {
      postMutate({
        linkName,
        linkUrl,
        content,
        categoryId: Number(category.categoryId),
        categoryName: category.categoryName,
      });
    }
  };
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
