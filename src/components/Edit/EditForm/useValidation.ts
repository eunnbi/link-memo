import { useDispatch } from "react-redux";
import { setWarningText } from "../../../modules/edit";
import { LinkMemoState } from "../../../types/linkMemo";

type ValidateState = Pick<LinkMemoState, "linkName" | "linkUrl">;

export const useValidation = () => {
  const dispatch = useDispatch();
  const validateForm = ({ linkName, linkUrl }: ValidateState): boolean => {
    if (linkName === "") {
      dispatch(setWarningText("링크 이름은 필수 입력 항목입니다."));
      return false;
    }
    if (linkUrl === "") {
      dispatch(setWarningText("링크 주소는 필수 입력 항목입니다."));
      return false;
    }
    return true;
  };
  return { validateForm };
};
