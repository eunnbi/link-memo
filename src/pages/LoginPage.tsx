import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";
import { shareLinkParam } from "../constants/shareLink";

const LoginPage = () => {
  const location = useLocation();
  const state = location.state as { register?: boolean };
  const search = location.search;
  const params = new URLSearchParams(search);
  const linkUrl = params.get(shareLinkParam);
  useEffect(() => {
    console.log(linkUrl);
    if (linkUrl !== null) {
      window.location.replace(linkUrl);
    }
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

const Main = styled.main`
  max-width: 520px;
  margin-bottom: 0;
  justify-content: space-between;
  min-height: 90vh;
`;

const Logo = styled.h1`
  font-size: 4rem;
  font-family: Pangolin;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
