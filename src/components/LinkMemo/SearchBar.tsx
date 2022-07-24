import React from "react";
import styled from "styled-components";

interface SearchBarProps {
  searchQuery: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchQuery, onChange }: SearchBarProps) => {
  return (
    <Input
      placeholder="🔎 검색"
      onChange={onChange}
      name="searchQuery"
      value={searchQuery}
    />
  );
};

export default SearchBar;

const Input = styled.input`
  width: 100%;
  border-radius: 1rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  flex-grow: 1;
  max-width: 400px;
  background-color: ${({ theme }) => theme.color.grayBgColor};
  color: ${({ theme }) => theme.color.textColor};
  &::-moz-placeholder {
    color: ${({ theme }) => theme.name === "dark" && "lightgray"};
  }
  &::placeholder {
    color: ${({ theme }) => theme.name === "dark" && "lightgray"};
  }
`;
