import RegisterForm from "../components/Register/RegisterForm";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
  max-width: 450px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 0;
  h1 {
    margin: 0 0 2rem;
    font-family: Pangolin;
  }
`;
const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <BackButton onClick={() => navigate("/")} />
      <h1>회원가입</h1>
      <RegisterForm />
    </Main>
  );
};

export default RegisterPage;
