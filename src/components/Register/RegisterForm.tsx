import { useState } from "react";
import FormInput from "../common/FormInput";
import { Button } from "../common/styles/Button.styles";
import { Form, FormRow, Text } from "./RegisterForm.styles";
import { AuthState } from "../../types/auth";
import { useForm } from "../../hooks/useForm";
import { usePostRegister } from "./usePostRegister";
import { useCheckPasswd } from "./useCheckPasswd";
import { useCheckIdDuplicate } from "./useCheckIdDuplicate";
import { validateRegisterForm } from "./validateRegisterForm";

export interface IGuideText {
  where: "id" | "password" | "checkPasswd" | "";
  text: string;
  isWarning: boolean;
}

const RegisterForm = () => {
  const [guideText, setGuideText] = useState<IGuideText>({
    where: "",
    text: "",
    isWarning: true,
  });
  const { form, onChange } = useForm<AuthState>({
    id: "",
    password: "",
    checkPasswd: "",
  });
  const { id, password, checkPasswd } = form;
  const { mutate, isLoading } = usePostRegister(); // 회원가입 api 호출
  const { checkIdDuplicate, duplicateCheck, IsDuplicate } =
    useCheckIdDuplicate(setGuideText); // 아이디 중복 여부 체크 (api 호출)
  useCheckPasswd(password, checkPasswd!, setGuideText); // 비밀번호 확인 입력란 유효성 검증

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = validateRegisterForm(
      id,
      password,
      checkPasswd!,
      duplicateCheck,
      IsDuplicate
    );
    if (value === true) {
      mutate({ id, password });
    } else {
      setGuideText(value);
    }
  };

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
          <Button onClick={() => checkIdDuplicate(id)} type="button">
            중복확인
          </Button>
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
