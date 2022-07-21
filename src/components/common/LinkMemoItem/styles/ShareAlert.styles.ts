import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  svg {
    font-size: 1.5rem;
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 2.5rem 0;
  overflow-x: scroll;
  img {
    width: 4rem;
    height: 4rem;
    cursor: pointer;
  }
`;

export const Circle = styled.a`
  background-color: gray;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2rem;
    color: #fff;
  }
`;

export const Clipboard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  flex-basis: 100px;
  p {
    margin: 0;
    &:first-child {
      flex-grow: 1;
      overflow: scroll;
      padding: 0.5rem;
      border-right: 1px solid lightgray;
      white-space: nowrap;
    }
    &:last-child {
      color: blueviolet;

      padding: 0.5rem 1rem;
      cursor: pointer;
      flex-shrink: 0;
    }
  }
`;
