import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import LinkMemoList from "../components/common/LinkMemoList";
import PlusButton from "../components/common/PlusButton";
import SearchBar from "../components/LinkMemo/SearchBar";
import { useFetchLinkMemos } from "../hooks/useFetchLinkMemos";
import { useForm } from "../hooks/useForm";
import { BsLink45Deg } from "react-icons/bs";

const LinkMemoPage = () => {
  const navigate = useNavigate();
  const { form, onChange } = useForm({
    searchQuery: "",
  });
  const { categoryId } = useParams();
  const location = useLocation();
  const { categoryName } = location.state as { categoryName: string };
  const { data, status } = useFetchLinkMemos(
    Number(categoryId),
    form.searchQuery
  );
  return (
    <>
      <Main>
        <BackButton onClick={() => navigate("/main")} />
        <Heading>
          <h1>{categoryName}</h1>
          <SearchBar searchQuery={form.searchQuery} onChange={onChange} />
        </Heading>
        {status === "loading" ? (
          <Text>Loading...</Text>
        ) : data?.message ? (
          <Text>{data?.message}</Text>
        ) : (
          <>
            {data?.linkMemos.length !== 0 && (
              <Count>
                <BsLink45Deg />
                {data?.linkMemos.length}
              </Count>
            )}
            <LinkMemoList linkMemos={data?.linkMemos} />
          </>
        )}
      </Main>
      <PlusButton
        onClick={() =>
          navigate("/edit", {
            state: { category: { categoryId, categoryName } },
          })
        }
      />
    </>
  );
};

export default LinkMemoPage;

const Main = styled.main`
  margin-top: 2rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  margin: 2.5rem 0 2rem;
  h1 {
    font-weight: bold;
    font-size: 2.3rem;
  }
`;

const Text = styled.p`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
`;

const Count = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.1rem;
  svg {
    margin-top: 2px;
  }
`;
