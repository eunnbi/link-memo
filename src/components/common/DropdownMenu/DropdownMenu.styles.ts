import styled from "styled-components";

export const Menu = styled.div`
  position: relative;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
    color: gray;
  }
`;

export const List = styled.div<{ show: boolean }>`
  position: absolute;
  right: 0;
  top: 2rem;
  width: 6rem;
  border-radius: 10px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  height: ${({ show }) => (show ? "6rem" : "0")};
  transition: all 0.2s linear;
  background-color: white;
  overflow: hidden;
  z-index: 2;
`;

export const Item = styled.div`
  padding: 0.8rem 0.6rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
