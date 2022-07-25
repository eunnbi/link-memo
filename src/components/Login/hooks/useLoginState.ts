import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

export const useLoginState = () => {
  return useSelector(({ login }: RootState) => login);
};
