import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postCategory } from "../../../api/categories";
import { categoryKeys } from "../../../constants/queryKey";
import { CategoryId, CategoryName } from "../../../types/category";

export const usePostCategory = (onCancel: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<CategoryId, unknown, CategoryName>(
    ({ categoryName }) => postCategory(categoryName),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(categoryKeys.all);
        onCancel();
      },
    }
  );
};
