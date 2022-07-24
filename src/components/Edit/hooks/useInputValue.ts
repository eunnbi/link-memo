import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

export const useInputValue = () => {
  return useSelector((rootState: RootState) => rootState.linkMemo);
};
