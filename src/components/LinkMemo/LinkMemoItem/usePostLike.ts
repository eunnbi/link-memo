import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postLinkMemoLike } from "../../../api/linkMemos";
import { SuccessResponse } from "../../../types";
import { LinkMemoLikeRequest } from "../../../types/linkMemo";
import { linkMemoKeys } from "../../../constants/queryKey";

export const usePostLike = () => {
  const queryClient = useQueryClient();
  return useMutation<SuccessResponse, unknown, LinkMemoLikeRequest>(
    ({ value, memoId }) => postLinkMemoLike(value, memoId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(linkMemoKeys.all);
      },
    }
  );
};
