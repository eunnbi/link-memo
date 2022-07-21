import { useQuery } from "@tanstack/react-query";
import { getFavoriteLinkMemos } from "../../../api/linkMemos";
import { linkMemoKeys } from "../../../constants/queryKey";
import { LinkMemosGetResponse } from "../../../types/linkMemo";

export const useFecthFavorites = () => {
  const { data, status } = useQuery<LinkMemosGetResponse>(
    linkMemoKeys.like,
    () => getFavoriteLinkMemos(),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  return { data, status };
};
