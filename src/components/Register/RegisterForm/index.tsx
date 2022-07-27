import FormInput from "../../common/FormInput";
import { Button } from "../../common/styles/Button.styles";
import { Form, FormRow, Text } from "./RegisterForm.styles";
import { usePostRegister } from "./usePostRegister";
import { useCheckPasswd } from "./useCheckPasswd";
import { useValidation } from "./useValidation";
import { useRegisterState } from "../hooks/useRegisterState";
import { useChangeInput } from "./useChangeInput";
import { useInitialize } from "./useInitialize";
import DuplicateCheckButton from "../DuplicateCheckButton";

const RegisterForm = () => {
  const {
    guideText,
    id,
    password,
    checkPasswd,
    duplicateCheck,
    isIdDuplicate,
  } = useRegisterState();
  const { onChange } = useChangeInput();
  const { validateForm } = useValidation();
  const { mutate, isLoading } = usePostRegister(); // 회원가입 api 호출
  useCheckPasswd(password, checkPasswd); // 비밀번호 확인 입력란 유효성 검증

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      validateForm({ id, password, checkPasswd, duplicateCheck, isIdDuplicate })
    ) {
      mutate({ id, password });
    }
  };

  useInitialize();

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
          <DuplicateCheckButton />
        </div>
        {guideText.where === "id" && (
          <Text warning={guideText.isWarning}>{guideText.text}</Text>
        )}
      </FormRow>
      <FormRow>
        <FormInput
          value={password}
          name="password"
          placeholder="비밀번호"
          password={true}
          onChange={onChange}
        />
        <p>8~15자, 영문 및 숫자 반드시 포함</p>
        {guideText.where === "password" && (
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
      <Button type="submit" disabled={isLoading ? true : false}>
        👌 가입하기
      </Button>
    </Form>
  );
};

export default RegisterForm;
