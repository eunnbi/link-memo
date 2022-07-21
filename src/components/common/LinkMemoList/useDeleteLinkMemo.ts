import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLinkMemo } from "../../../api/linkMemos";
import { SuccessResponse } from "../../../types";
import { LinkMemoId } from "../../../types/linkMemo";
import { categoriesKey } from "../../../constants/queryKey";

export const useDeleteLinkMemo = (queryKey: any, onClose: () => void) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation<SuccessResponse, unknown, LinkMemoId>(
    ({ memoId }) => deleteLinkMemo(memoId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
        queryClient.invalidateQueries(categoriesKey);
        onClose();
      },
    }
  );
  return deleteMutation;
};
