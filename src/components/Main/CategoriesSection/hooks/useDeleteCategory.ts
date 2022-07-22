import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteCategory } from "../../../../api/categories";
import { categoriesKey } from "../../../../constants/queryKey";
import { SuccessResponse } from "../../../../types";
import { CategoryId } from "../../../../types/category";

export const useDeleteCategory = (onCancel: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<SuccessResponse, unknown, CategoryId>(
    ({ categoryId }) => deleteCategory(categoryId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(categoriesKey);
        onCancel();
      },
    }
  );
};
