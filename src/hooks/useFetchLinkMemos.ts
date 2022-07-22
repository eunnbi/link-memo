import { useQuery } from "@tanstack/react-query";
import { getLinkMemos } from "../api/linkMemos";
import { linkMemoKeys } from "../constants/queryKey";
import { LinkMemosGetResponse } from "../types/linkMemo";

export const useFetchLinkMemos = (categoryId: number, searchQuery: string) => {
  return useQuery<LinkMemosGetResponse>(
    linkMemoKeys.filter(categoryId, searchQuery),
    () => getLinkMemos(categoryId, searchQuery),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
};
