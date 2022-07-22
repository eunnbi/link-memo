import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postLinkMemo } from "../../../api/linkMemos";
import { LinkMemoId, LinkMemoRequest } from "../../../types/linkMemo";

export const usePostLinkMemo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<LinkMemoId, unknown, LinkMemoRequest>(
    ({ linkName, linkUrl, content, categoryId }) =>
      postLinkMemo(linkName, linkUrl, content, categoryId),
    {
      onSuccess: (data, { categoryId, categoryName }) => {
        queryClient.invalidateQueries();
        navigate(`/memo/${categoryId}`, { state: { categoryName } });
      },
    }
  );
};
