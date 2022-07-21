import { useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLinkMemoLike } from "../../../api/linkMemos";
import { SuccessResponse } from "../../../types";
import { LinkMemoLikeRequest } from "../../../types/linkMemo";

export const usePostLike = (
  initialLike: boolean,
  like: boolean,
  memoId: number
) => {
  const queryClient = useQueryClient();
  const likeMutation = useMutation<
    SuccessResponse,
    unknown,
    LinkMemoLikeRequest
  >(({ value, memoId }) => postLinkMemoLike(value, memoId), {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      if (initialLike !== like) {
        likeMutation.mutate({ value: like, memoId });
      }
    }, 1500);
  }, [like]);
};
