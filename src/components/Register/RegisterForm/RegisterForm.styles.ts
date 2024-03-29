import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

export const FormRow = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  div {
    display: flex;
    align-items: center;
    label {
      flex-grow: 1;
    }
    button {
      margin-left: 10px;
      word-break: keep-all;
    }
  }
  p {
    font-size: 1rem;
    margin-top: 5px;
    padding: 0 0.5rem;
  }
`;

export const Text = styled.p<{ warning: boolean }>`
  padding: 0 0.5rem;
  color: ${({ warning }) => (warning ? "red" : "blue")};
`;
