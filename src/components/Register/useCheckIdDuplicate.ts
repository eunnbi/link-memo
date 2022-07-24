import React, { SetStateAction, useRef } from "react";
import { IGuideText } from "./RegisterForm";
import { getIsIdDuplicate } from "../../api/auth";

export const useCheckIdDuplicate = (
  setGuideText: React.Dispatch<SetStateAction<IGuideText>>
) => {
  const duplicateCheck = useRef(false);
  const IsDuplicate = useRef(false);
  const checkIdDuplicate = (id: string) => {
    if (id === "") {
      setGuideText({
        where: "id",
        text: "아이디를 입력해주세요.",
        isWarning: true,
      });
      return;
    }
    getIsIdDuplicate(id).then((data) => {
      if (data.isIdDuplicate) {
        IsDuplicate.current = true;
        setGuideText({
          where: "id",
          text: "중복된 아이디입니다. 다시 입력해주세요.",
          isWarning: true,
        });
      } else {
        IsDuplicate.current = false;
        setGuideText({
          where: "id",
          text: "중복되지 않은 아이디입니다!",
          isWarning: false,
        });
      }
    });
    duplicateCheck.current = true;
  };
  return {
    duplicateCheck: duplicateCheck.current,
    IsDuplicate: IsDuplicate.current,
    checkIdDuplicate,
  };
};
