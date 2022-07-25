import { useEffect } from "react";
import { useChangeGuideText } from "./useChangeGuideText";

export const useCheckPasswd = (password: string, checkPasswd: string) => {
  const changeGuideText = useChangeGuideText();
  useEffect(() => {
    if (password === "" || checkPasswd === "") return;
    if (password === checkPasswd) {
      changeGuideText({
        where: "checkPasswd",
        text: "비밀번호가 일치합니다!",
        isWarning: false,
      });
    } else {
      changeGuideText({
        where: "checkPasswd",
        text: "비밀번호가 일치하지 않습니다.",
        isWarning: true,
      });
    }
  }, [checkPasswd, password]);
};
