import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { LinkMemoState } from "../../../types/linkMemo";

export const useLinkInputs = () => {
  const { linkName, linkUrl }: LinkMemoState = useSelector(
    (rootState: RootState) => rootState.linkMemo
  );
  return { linkName, linkUrl };
};
