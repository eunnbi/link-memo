import { useDispatch } from "react-redux";
import { getIsIdDuplicate } from "../../../api/auth";
import { setDuplicateValue } from "../../../modules/register";
import { useChangeGuideText } from "./useChangeGuideText";

export const useCheckIdDuplicate = () => {
  const changeGuideText = useChangeGuideText();
  const dispatch = useDispatch();
  const checkIdDuplicate = (id: string) => {
    if (id === "") {
      changeGuideText({
        where: "id",
        text: "아이디를 입력해주세요.",
        isWarning: true,
      });
      return;
    }
    getIsIdDuplicate(id).then((data) => {
      if (data.isIdDuplicate) {
        dispatch(
          setDuplicateValue({ isIdDuplicate: true, duplicateCheck: true })
        );
        changeGuideText({
          where: "id",
          text: "중복된 아이디입니다. 다시 입력해주세요.",
          isWarning: true,
        });
      } else {
        dispatch(
          setDuplicateValue({ isIdDuplicate: false, duplicateCheck: true })
        );
        changeGuideText({
          where: "id",
          text: "중복되지 않은 아이디입니다!",
          isWarning: false,
        });
      }
    });
  };
  return {
    checkIdDuplicate,
  };
};
