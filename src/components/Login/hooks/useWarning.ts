import { useDispatch } from "react-redux";
import { setWarningText } from "../../../modules/login";

export const useWarning = () => {
  const dispatch = useDispatch();
  const changeWarningText = (text: string) => {
    dispatch(setWarningText(text));
  };
  return { changeWarningText };
};
