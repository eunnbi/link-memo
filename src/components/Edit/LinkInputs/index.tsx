import FormInput from "../../common/FormInput";
import { useInputChange } from "../hooks/useInputChange";
import { useInputValue } from "../hooks/useInputValue";
import styled from "styled-components";

const LinkInputs = () => {
  const { linkName, linkUrl } = useInputValue();
  const onChange = useInputChange();
  return (
    <InputBox>
      <FormInput
        label="링크 이름"
        name="linkName"
        value={linkName}
        placeholder="naver"
        onChange={onChange}
        password={false}
      />
      <FormInput
        label="링크 주소 (URL)"
        name="linkUrl"
        value={linkUrl}
        placeholder="www.naver.com"
        onChange={onChange}
        password={false}
      />
    </InputBox>
  );
};

export default LinkInputs;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.5rem;
`;
