import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLinkMemo } from "../../../../api/linkMemos";
import { SuccessResponse } from "../../../../types";
import { LinkMemoId } from "../../../../types/linkMemo";

export const useDeleteLinkMemo = (onClose: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<SuccessResponse, unknown, LinkMemoId>(
    ({ memoId }) => deleteLinkMemo(memoId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        onClose();
      },
    }
  );
};
