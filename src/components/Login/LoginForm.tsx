import React from "react";
import FormInput from "../common/FormInput";
import SaveIdCheckBox from "./SaveIdCheckBox";
import { Button, LinkButton } from "../common/styles/Button.styles";
import { Form, ButtonBox, Text } from "./LoginForm.styles";
import { usePostLogin } from "./hooks/usePostLogin";
import { useLoginState } from "./hooks/useLoginState";
import { useChangeInput } from "./hooks/useChangeInput";
import { useValidation } from "./hooks/useValidation";

const LoginForm = () => {
  const { id, password, warningText } = useLoginState();
  const { onChange } = useChangeInput();
  const { validateForm } = useValidation();
  const { mutate, isLoading } = usePostLogin();

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm({ id, password })) {
      mutate({ id, password });
    }
  };

  return (
    <Form onSubmit={onLogin}>
      {warningText && <Text>{warningText}</Text>}
      <FormInput
        placeholder="아이디"
        value={id}
        name="id"
        onChange={onChange}
        password={false}
      />
      <FormInput
        placeholder="비밀번호"
        value={password}
        name="password"
        onChange={onChange}
        password={true}
      />
      <SaveIdCheckBox id={id} />
      <ButtonBox>
        <Button type="submit" disabled={isLoading ? true : false}>
          {isLoading ? "로그인 중..." : "로그인하기"}
        </Button>
        <LinkButton to={"/register"}>회원가입하러 가기</LinkButton>
      </ButtonBox>
    </Form>
  );
};

export default LoginForm;
