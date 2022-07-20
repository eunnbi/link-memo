import LoginForm from "../components/Login/LoginForm";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Main = styled.main`
  max-width: 520px;
  margin-bottom: 0;
  justify-content: space-between;
  min-height: 90vh;
`;

const Logo = styled.h1`
  font-size: 4rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  const location = useLocation();
  const state = location.state as { register?: boolean };
  useEffect(() => {
    if (state && state.register) {
      alert("회원가입에 성공하였습니다! 💜");
    }
  }, []);
  return (
    <Main>
      <Logo>Link Memo</Logo>
      <LoginForm />
    </Main>
  );
};

export default LoginPage;
