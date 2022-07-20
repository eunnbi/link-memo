import styled from 'styled-components';

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
  border-bottom: 1px solid #000;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0;
  outline: none;
`;

export const InputWrapper = styled.div`
  display: flex;
  > svg {
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
