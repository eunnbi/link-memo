import { useQuery } from "@tanstack/react-query";
import { categoriesKey } from "../constants/queryKey";
import { getCategories } from "../api/categories";
import { CategoriesGetResponse } from "../types/category";

export const useFetchCategories = () => {
  return useQuery<CategoriesGetResponse>(categoriesKey, () => getCategories(), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
