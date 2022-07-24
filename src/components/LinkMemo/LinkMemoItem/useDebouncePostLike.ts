import { useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLinkMemoLike } from "../../../api/linkMemos";
import { SuccessResponse } from "../../../types";
import { LinkMemoLikeRequest } from "../../../types/linkMemo";
import { linkMemoKeys } from "../../../constants/queryKey";

export const useDebouncePostLike = (
  initialLike: boolean,
  like: boolean,
  memoId: number
) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<SuccessResponse, unknown, LinkMemoLikeRequest>(
    ({ value, memoId }) => postLinkMemoLike(value, memoId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(linkMemoKeys.all);
      },
    }
  );

  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      if (initialLike !== like) {
        mutate({ value: like, memoId });
      }
    }, 1500);
  }, [like]);
};
