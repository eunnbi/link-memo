import styled, { css } from "styled-components";
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";
import { useToggle } from "../../../hooks/useToggle";

const MemoContent = ({ content }: { content: string }) => {
  const [show, onToggle] = useToggle(false);
  return content !== "" ? (
    <ContentBox>
      <button onClick={onToggle}>
        {show ? <VscTriangleDown /> : <VscTriangleRight />}
      </button>
      <Content show={show}>{content}</Content>
    </ContentBox>
  ) : null;
};

export default MemoContent;

const ContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  button {
    background-color: transparent;
    flex-shrink: 0;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.textColor};
  }
`;

const Content = styled.p<{ show: boolean }>`
  font-size: 1rem;
  line-height: 2rem;
  white-space: pre-line;
  ${({ show }) =>
    !show &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
