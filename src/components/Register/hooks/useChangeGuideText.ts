import { useDispatch } from "react-redux";
import { setGuideText } from "../../../modules/register";
import { IGuideText } from "../../../types/auth";

export const useChangeGuideText = () => {
  const dispatch = useDispatch();
  return (guideText: IGuideText) => dispatch(setGuideText(guideText));
};
