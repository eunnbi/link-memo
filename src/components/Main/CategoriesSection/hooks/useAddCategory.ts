import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postCategory } from "../../../../api/categories";
import { categoriesKey } from "../../../../constants/queryKey";
import { CategoryId, CategoryName } from "../../../../types/category";

export const useAddCategory = (onCancel: () => void) => {
  const queryClient = useQueryClient();
  const { mutate, status } = useMutation<CategoryId, unknown, CategoryName>(
    ({ categoryName }) => postCategory(categoryName),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(categoriesKey);
        onCancel();
      },
    }
  );

  const addCategory = (categoryName: string) => {
    mutate({ categoryName });
  };

  return { addCategory, status };
};
