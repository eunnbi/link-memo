import { useState } from "react";
import FormInput from "../common/FormInput";
import { Button, LinkButton } from "../common/styles/Button.styles";
import CheckBox from "../common/CheckBox";
import { Form, ButtonBox, Text } from "./LoginForm.styles";
import { usePostLogin } from "./usePostLogin";
import { useForm } from "../../hooks/useForm";
import { useSaveId } from "./useSaveId";
import { AuthState } from "../../types/auth";

const LoginForm = () => {
  const { form, onChange, setForm } = useForm<AuthState>({
    id: "",
    password: "",
  });
  const { id, password } = form;
  const [warningText, setWarningText] = useState("");
  const [saveId, handleSaveId] = useSaveId(id, setForm);
  const { mutate, isLoading } = usePostLogin(setWarningText);

  const onLogin = () => {
    if (id === "") {
      setWarningText("아이디를 입력해주세요.");
      return;
    } else if (password === "") {
      setWarningText("비밀번호를 입력해주세요.");
      return;
    }
    mutate({ id, password });
  };

  return (
    <Form onSubmit={onLogin}>
      {warningText && <Text>{warningText}</Text>}
      <FormInput
        placeholder="아이디"
        value={form.id}
        name="id"
        onChange={onChange}
        password={false}
      />
      <FormInput
        placeholder="비밀번호"
        value={form.password}
        name="password"
        onChange={onChange}
        password={true}
      />
      <CheckBox
        label="아이디 저장"
        isChecked={saveId}
        onToggle={handleSaveId}
      />
      <ButtonBox>
        <Button type="submit">
          {isLoading ? "로그인 중..." : "로그인하기"}
        </Button>
        <LinkButton to={"/register"}>회원가입하러 가기</LinkButton>
      </ButtonBox>
    </Form>
  );
};

export default LoginForm;
