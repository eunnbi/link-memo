import { useQuery } from "@tanstack/react-query";
import { getLinkMemos } from "../api/linkMemos";
import { linkMemoKeys } from "../constants/queryKey";
import { LinkMemosGetResponse } from "../types/linkMemo";

export const useFetchLinkMemos = (categoryId: number, searchQuery: string) => {
  let queryKey = linkMemoKeys.byCategory(categoryId);
  if (searchQuery !== "") {
    queryKey = linkMemoKeys.bySearchQuery(categoryId, searchQuery);
  }
  const { data, status } = useQuery<LinkMemosGetResponse>(
    queryKey,
    () => getLinkMemos(categoryId, searchQuery),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  return { data, status };
};
