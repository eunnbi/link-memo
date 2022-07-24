import { useEffect, useRef } from "react";
import { usePostLike } from "./usePostLike";

export const useDebouncePostLike = (
  initialLike: boolean,
  like: boolean,
  memoId: number
) => {
  const { mutate } = usePostLike();

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
