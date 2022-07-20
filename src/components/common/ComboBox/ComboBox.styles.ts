import styled from "styled-components";

export const Box = styled.div`
  border-radius: 1.2rem;
  border: 1px solid #000;
  position: relative;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 2.5rem;
  left: 0;
  transition: all 0.2s ease-in;
  border-radius: 15px;
  max-height: 0;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.3);
  z-index: 1;
  background-color: #fff;
  overflow-y: scroll;
  &.active {
    max-height: 200px;
  }
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Item = styled.li<{ selected: boolean }>`
  font-size: 1.1rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-weight: ${({ selected }) => selected && "bold"};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InputBox = styled.div`
  padding: 0.2rem 0.5rem 0.2rem 1rem;
  p {
    font-size: 1.2rem;
  }
  & > svg {
    margin-left: 10px;
  }
`;

export const Text = styled.p`
  font-size: 0.8rem;
  padding: 0.5rem 0 0 1rem;
`;
