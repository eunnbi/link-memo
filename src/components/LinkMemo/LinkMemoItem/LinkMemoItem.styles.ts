import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  border-radius: 1rem;
  padding: 1rem 1rem 1rem 1.5rem;
  box-shadow: ${({ theme }) => `1px 0.2rem 0.3rem ${theme.color.shadowColor}`};
  border: ${({ theme }) => theme.name === "light" && "1px solid lightgray"};
  background-color: ${({ theme }) => theme.color.secondBgColor};
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  & > div {
    display: flex;
    align-items: center;
    align-items: flex-start;
    img {
      margin-top: 0.5rem;
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 0.1rem;
    }
  }
  h2 {
    font-size: 1.2rem;
    margin-left: 0.7rem;
    font-weight: bold;
  }
`;

export const Anchor = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.5;
  &:hover {
    text-decoration: underline;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 0.7rem;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
