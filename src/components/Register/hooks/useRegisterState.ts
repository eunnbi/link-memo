import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

export const useRegisterState = () => {
  return useSelector(({ register }: RootState) => register);
};
