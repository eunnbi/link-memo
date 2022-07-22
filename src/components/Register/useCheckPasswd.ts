import { Dispatch, SetStateAction, useEffect } from "react";
import { IGuideText } from "./RegisterForm";

export const useCheckPasswd = (
  password: string,
  checkPasswd: string,
  setGuideText: Dispatch<SetStateAction<IGuideText>>
) => {
  useEffect(() => {
    if (password === "" || checkPasswd === "") return;
    if (password === checkPasswd) {
      setGuideText({
        where: "checkPasswd",
        text: "비밀번호가 일치합니다!",
        isWarning: false,
      });
    } else {
      setGuideText({
        where: "checkPasswd",
        text: "비밀번호가 일치하지 않습니다.",
        isWarning: true,
      });
    }
  }, [checkPasswd, password]);
};
