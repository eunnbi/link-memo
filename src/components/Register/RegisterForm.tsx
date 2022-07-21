import { useState } from "react";
import FormInput from "../common/FormInput";
import { Button } from "../common/styles/Button.styles";
import { Form, FormRow, Text } from "./RegisterForm.styles";
import { useRegister } from "./useRegister";
import { useCheckPasswd } from "./useCheckPasswd";
import { useForm } from "../../hooks/useForm";

export interface IGuideText {
  where: string;
  text: string;
  isWarning: boolean;
}

const RegisterForm = () => {
  const [guideText, setGuideText] = useState({
    where: "",
    text: "",
    isWarning: true,
  });
  const { form, onChange } = useForm({
    id: "",
    passwd: "",
    checkPasswd: "",
  });
  const { id, passwd, checkPasswd } = form;
  const { onRegister, checkIdDuplicate } = useRegister(
    id,
    passwd,
    checkPasswd,
    setGuideText
  );
  useCheckPasswd(passwd, checkPasswd, setGuideText);
  return (
    <Form onSubmit={onRegister}>
      <FormRow>
        <div>
          <FormInput
            value={id}
            name="id"
            placeholder="아이디"
            password={false}
            onChange={onChange}
          />
          <Button onClick={checkIdDuplicate} type="button">
            중복확인
          </Button>
        </div>
        {guideText.where === "id" && (
          <Text warning={guideText.isWarning}>{guideText.text}</Text>
        )}
      </FormRow>
      <FormRow>
        <FormInput
          value={passwd}
          name="passwd"
          placeholder="비밀번호"
          password={true}
          onChange={onChange}
        />
        <p>8~15자, 영문 및 숫자 반드시 포함</p>
        {guideText.where === "passwd" && (
          <Text warning={guideText.isWarning}>{guideText.text}</Text>
        )}
      </FormRow>
      <FormRow>
        <FormInput
          value={checkPasswd}
          name="checkPasswd"
          placeholder="비밀번호 확인"
          password={true}
          onChange={onChange}
        />
        {guideText.where === "checkPasswd" && (
          <Text warning={guideText.isWarning}>{guideText.text}</Text>
        )}
      </FormRow>
      <Button type="submit">👌 가입하기</Button>
    </Form>
  );
};

export default RegisterForm;
