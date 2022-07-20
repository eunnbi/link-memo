import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchCategory } from "../../../../api/categories";
import { categoriesKey } from "../../../../constants/queryKey";
import { SuccessResponse } from "../../../../types";
import { Category } from "../../../../types/category";

export const useEditCategory = (onCancel: () => void) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation<SuccessResponse, unknown, Category>(
    ({ categoryId, categoryName }) => patchCategory(categoryName, categoryId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(categoriesKey);
        onCancel();
      },
    }
  );

  const editCategory = (categoryId: number, categoryName: string) => {
    mutate({ categoryId, categoryName });
  };

  return { editCategory, isLoading };
};
