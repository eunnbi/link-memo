import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { LinkMemoState } from "../../../types/linkMemo";

export const useMemoInput = () => {
  const { content }: LinkMemoState = useSelector(
    (rootState: RootState) => rootState.linkMemo
  );
  return { content };
};
