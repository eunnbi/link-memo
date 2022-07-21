import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RootState } from "../../../modules";
import { SuccessResponse } from "../../../types";
import {
  LinkMemoId,
  LinkMemoRequest,
  LinkMemoState,
} from "../../../types/linkMemo";
import { patchLinkMemo, postLinkMemo } from "../../../api/linkMemos";

export const useEdit = (id: number | undefined) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const onEditSuccess = (categoryId: number, categoryName: string) => {
    queryClient.invalidateQueries();
    navigate(`/memo/${categoryId}`, { state: { categoryName } });
  };

  const postMutation = useMutation<LinkMemoId, unknown, LinkMemoRequest>(
    ({ linkName, linkUrl, content, categoryId }) =>
      postLinkMemo(linkName, linkUrl, content, categoryId),
    {
      onSuccess: (data, { categoryId, categoryName }) => {
        onEditSuccess(categoryId, categoryName!);
      },
    }
  );

  const patchMutation = useMutation<SuccessResponse, unknown, LinkMemoRequest>(
    ({ linkName, linkUrl, content, categoryId, memoId }) =>
      patchLinkMemo(linkName, linkUrl, content, categoryId, memoId!),
    {
      onSuccess: (data, { categoryId, categoryName }) => {
        onEditSuccess(categoryId, categoryName!);
      },
    }
  );

  const [warningText, setWarningText] = useState("");
  const { linkName, linkUrl, content, category }: LinkMemoState = useSelector(
    (rootState: RootState) => rootState.linkMemo
  );
  const onEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (linkName === "") {
      setWarningText("북마크 이름은 필수 입력 항목입니다.");
      return;
    }
    if (linkUrl === "") {
      setWarningText("URL 주소는 필수 입력 항목입니다.");
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
