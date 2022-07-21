import LinkMemoItem from "../LinkMemoItem";
import styled from "styled-components";
import { useState } from "react";
import DeleteAlert from "./DeleteAlert";

interface LinkMemoListProps {
  categoryId: number;
  categoryName: string;
}

const LinkMemoList = ({ categoryId, categoryName }: LinkMemoListProps) => {
  const [deleteMemoId, setDeleteMemoId] = useState(0);

  return (
    <>
      <List>
        <LinkMemoItem
          linkMemo={{
            linkMemoId: 1,
            linkName: "무한 스크롤 구현하기",
            linkUrl:
              "https://blog.prasanna.codes/how-to-implement-infinite-scrolling-in-react",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            categoryId,
            categoryName,
            like: false,
          }}
          clickRemoveMenu={() => setDeleteMemoId(1)}
        />
      </List>
      <DeleteAlert memoId={deleteMemoId} setMemoId={setDeleteMemoId} />
    </>
  );
};

export default LinkMemoList;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 2rem 0;
`;
