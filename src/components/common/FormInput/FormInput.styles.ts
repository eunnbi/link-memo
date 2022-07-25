import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  & > p {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.borderColor}`};
  padding: 0.5rem 0.8rem;
  font-size: 1.2rem;
  border-radius: 0;
  background-color: transparent;
  outline: none;
  font-family: NotoSans;
  color: ${({ theme }) => theme.color.textColor};
  &::placeholder {
    color: ${({ theme }) => theme.color.placeholderColor};
  }
  &::-moz-placeholder {
    color: ${({ theme }) => theme.color.placeholderColor};
  }
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.placeholderColor};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  > svg {
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
