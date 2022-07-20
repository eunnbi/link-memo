import styled from "styled-components";

export const Form = styled.form`
  width: 70vw;
  margin: 0 auto 2rem;
  max-width: 400px;
  label {
    margin-bottom: 4rem;
  }
  p {
    font-size: 1.1rem;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.p`
  background-color: rgba(0, 0, 0, 0.05);
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1rem;
  color: red;
  margin-bottom: 2rem;
`;
