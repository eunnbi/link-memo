import React from "react";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";

interface SearchBarProps {
  searchQuery: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchQuery, onChange }: SearchBarProps) => {
  return (
    <Bar>
      <Input
        placeholder="검색"
        onChange={onChange}
        name="searchQuery"
        value={searchQuery}
      />
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
  border-radius: 1rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  flex-grow: 1;
  max-width: 400px;
  background-color: ${({ theme }) => theme.name === "dark" && "#464646"};
  border: ${({ theme }) => theme.name === "light" && "1px solid lightgray"};
  color: ${({ theme }) => theme.color.textColor};
  &::-moz-placeholder {
    color: ${({ theme }) => theme.name === "dark" && "lightgray"};
  }
  &::placeholder {
    color: ${({ theme }) => theme.name === "dark" && "lightgray"};
  }
`;
