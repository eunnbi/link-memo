import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import PlusButton from "../components/common/PlusButton";
import LinkMemoHeader from "../components/LinkMemo/LinkMemoHeader";
import { useGoBack } from "../hooks/useGoBack";

const LinkMemoPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const location = useLocation();
  const categoryName = location.state as string;
  const goBack = useGoBack();
  return (
    <>
      <Main>
        <BackButton onClick={goBack} />
        <LinkMemoHeader categoryName={categoryName} />
      </Main>
      <PlusButton onClick={() => navigate("/edit")} />
    </>
  );
};

export default LinkMemoPage;

const Main = styled.main`
  margin-top: 2rem;
`;
