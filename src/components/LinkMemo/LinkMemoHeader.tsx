import styled from "styled-components";
import SearchBar from "../common/SearchBar";

const LinkMemoHeader = ({ categoryName }: { categoryName: string }) => {
  return (
    <Heading>
      <h1>{categoryName}</h1>
      <SearchBar />
    </Heading>
  );
};

export default LinkMemoHeader;

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
