import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { patchLinkMemo } from "../../../api/linkMemos";
import { SuccessResponse } from "../../../types";
import { LinkMemoRequest } from "../../../types/linkMemo";

export const usePatchLinkMemo = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<SuccessResponse, unknown, LinkMemoRequest>(
    ({ linkName, linkUrl, content, categoryId, memoId }) =>
      patchLinkMemo(linkName, linkUrl, content, categoryId, memoId!),
    {
      onSuccess: (data, { categoryId, categoryName }) => {
        queryClient.invalidateQueries();
        navigate(`/memo/${categoryId}`, { state: { categoryName } });
      },
    }
  );
};
