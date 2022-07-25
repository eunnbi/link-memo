import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

export const useEditFormState = () => {
  return useSelector((rootState: RootState) => rootState.edit);
};
