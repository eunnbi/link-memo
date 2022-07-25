import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

export const useSelected = () => {
  const { category } = useSelector((rootState: RootState) => rootState.edit);
  return {
    selected: category,
  };
};
