import { GoSearch } from "react-icons/go";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <Bar>
      <Input placeholder="검색" />
      <GoSearch />
    </Bar>
  );
};

export default SearchBar;

const Bar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    cursor: pointer;
    color: gray;
  }
`;

const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 1rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  flex-grow: 1;
  max-width: 400px;
`;
