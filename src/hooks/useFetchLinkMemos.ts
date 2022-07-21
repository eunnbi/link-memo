import { useQuery } from "@tanstack/react-query";
import { getLinkMemos } from "../api/linkMemos";
import { linkMemoKeys } from "../constants/queryKey";
import { LinkMemosGetResponse } from "../types/linkMemo";

export const useFetchLinkMemos = (
  categoryId: number,
  searchQuery: string | undefined = undefined
) => {
  const { data, status } = useQuery<LinkMemosGetResponse>(
    linkMemoKeys.byCategory(categoryId),
    () => getLinkMemos(categoryId, searchQuery),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  return { data, status };
};
