import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putLinkMemoLike } from "../../../../api/linkMemos";
import { SuccessResponse } from "../../../../types";
import { LinkMemoLikeRequest } from "../../../../types/linkMemo";
import { linkMemoKeys } from "../../../../constants/queryKey";

export const usePostLike = () => {
  const queryClient = useQueryClient();
  return useMutation<SuccessResponse, unknown, LinkMemoLikeRequest>(
    ({ value, memoId }) => putLinkMemoLike(value, memoId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(linkMemoKeys.all);
      },
    }
  );
};
