import { useQuery } from "@tanstack/react-query";
import { categoriesKey } from "../../../../constants/queryKey";
import { getCategories } from "../../../../api/categories";
import { CategoriesResponse } from "../../../../types/category";

export const useFetchCategories = () => {
  const { data, status } = useQuery<CategoriesResponse>(
    categoriesKey,
    () => getCategories(),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  return { data, status };
};
