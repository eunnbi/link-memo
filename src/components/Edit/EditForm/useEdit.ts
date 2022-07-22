import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { LinkMemoState } from "../../../types/linkMemo";
import { usePostLinkMemo } from "./usePostLinkMemo";
import { usePatchLinkMemo } from "./usePatchLinkMemo";

export const useEdit = (id: number | undefined) => {
  const [warningText, setWarningText] = useState("");
  const { linkName, linkUrl, content, category }: LinkMemoState = useSelector(
    (rootState: RootState) => rootState.linkMemo
  );
  const postMutation = usePostLinkMemo();
  const patchMutation = usePatchLinkMemo();

  const onEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (linkName === "") {
      setWarningText("링크 이름은 필수 입력 항목입니다.");
      return;
    }
    if (linkUrl === "") {
      setWarningText("링크 주소는 필수 입력 항목입니다.");
      return;
    }
    if (id) {
      patchMutation.mutate({
        linkName,
        linkUrl,
        content,
        categoryId: Number(category.categoryId),
        categoryName: category.categoryName,
        memoId: id,
      });
    } else {
      postMutation.mutate({
        linkName,
        linkUrl,
        content,
        categoryId: Number(category.categoryId),
        categoryName: category.categoryName,
      });
    }
  };
  return {
    warningText,
    onEdit,
    postLoading: postMutation.isLoading,
    patchLoading: patchMutation.isLoading,
  };
};
