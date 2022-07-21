import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { changeCategory, setLinkMemo } from "../modules/linkMemo";
import { LinkMemoState } from "../types/linkMemo";
import styled from "styled-components";
import NotificationButton from "../components/Edit/NotificationButton";
import EditForm from "../components/Edit/EditForm";

const EditPage = () => {
  const { memoId } = useParams();
  const location = useLocation();
  const state = location.state as LinkMemoState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (memoId && state) {
      dispatch(
        setLinkMemo(
          state.linkName,
          state.linkUrl,
          state.content,
          state.category.categoryId,
          state.category.categoryName
        )
      );
    } else if (state) {
      dispatch(
        changeCategory(state.category.categoryId, state.category.categoryName)
      );
    }
  }, []);
  return (
    <Main>
      <NotificationButton />
      <EditForm id={memoId ? parseInt(memoId) : undefined} />
    </Main>
  );
};

export default EditPage;

const Main = styled.main`
  max-width: 500px;
  padding-top: 1.5rem;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
