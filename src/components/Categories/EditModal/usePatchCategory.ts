import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchCategory } from "../../../api/categories";
import { categoryKeys } from "../../../constants/queryKey";
import { SuccessResponse } from "../../../types";
import { Category } from "../../../types/category";

export const usePatchCategory = (onCancel: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<SuccessResponse, unknown, Category>(
    ({ categoryId, categoryName }) => patchCategory(categoryName, categoryId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(categoryKeys.all);
        onCancel();
      },
    }
  );
};
