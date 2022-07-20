import styled from "styled-components";

export const AlertWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const AlertBox = styled.div`
  position: relative;
  background-color: white;
  border-radius: 20px;
  min-height: 130px;
  max-width: 430px;
  width: 80vw;
  padding: 1.5rem 1rem 0;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.3);
  h2 {
    text-align: center;
  }
  h3 {
    text-align: center;
    line-height: 2rem;
    font-size: 1.3rem;
  }
  label {
    margin: 1rem 0;
  }
`;

export const AlertContent = styled.div`
  margin-bottom: 4rem;
  p {
    font-size: 1rem;
    text-align: center;
    margin: 0.5rem 0;
    &.warning {
      color: red;
    }
  }
`;

export const ButtonBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid lightgray;
  button:last-child {
    border-left: 1px solid lightgray;
  }
`;

export const Button = styled.button<{ IsCancel: boolean }>`
  color: ${({ IsCancel }) => (IsCancel ? "red" : "blue")};
  background-color: transparent;
  padding: 0.7rem 0;
  font-size: 1rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 0;
  div {
    font-size: 1rem;
  }
  svg {
    font-size: 1.1rem;
  }
`;
