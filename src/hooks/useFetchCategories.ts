import { useQuery } from "@tanstack/react-query";
import { categoryKeys } from "../constants/queryKey";
import { getCategories } from "../api/categories";
import { CategoriesGetResponse } from "../types/category";

export const useFetchCategories = () => {
  return useQuery<CategoriesGetResponse>(
    categoryKeys.all,
    () => getCategories(),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
};
