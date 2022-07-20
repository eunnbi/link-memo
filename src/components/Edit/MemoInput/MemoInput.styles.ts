import styled from "styled-components";

export const Textarea = styled.textarea`
  resize: none;
  height: 25vh;
  font-size: 1.2rem;
  padding: 1rem;
  font-family: NotoSans;
  border: none;
  border-bottom: 1px solid #000;
  border-radius: 0;
  outline: none;
  margin-bottom: 3rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1.1rem;
  }
  &::-moz-placeholder {
    font-size: 1.1rem;
  }
`;
