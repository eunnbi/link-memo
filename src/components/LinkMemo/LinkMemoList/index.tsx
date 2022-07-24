import styled from "styled-components";
import LinkMemoItem from "../LinkMemoItem";
import { LinkMemoResponse } from "../../../types/linkMemo";

interface LinkMemoListProps {
  linkMemos: LinkMemoResponse[] | undefined;
  noLinkMemos?: JSX.Element;
}

const LinkMemoList = ({ linkMemos, noLinkMemos }: LinkMemoListProps) => {
  return linkMemos?.length === 0 ? (
    noLinkMemos ? (
      noLinkMemos
    ) : (
      <NoLinkMemos>아래 (+) 버튼을 눌러 링크 메모를 추가해보세요!</NoLinkMemos>
    )
  ) : (
    <List>
      {linkMemos?.map((linkMemo) => (
        <LinkMemoItem key={linkMemo.memoId} linkMemo={linkMemo} />
      ))}
    </List>
  );
};

export default LinkMemoList;

const NoLinkMemos = styled.p`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 2rem 0;
`;
