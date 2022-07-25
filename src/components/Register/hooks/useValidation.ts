import { RegisterState } from "../../../types/auth";
import { useChangeGuideText } from "./useChangeGuideText";

type ValidateState = Pick<
  RegisterState,
  "id" | "password" | "checkPasswd" | "isIdDuplicate" | "duplicateCheck"
>;

export const useValidation = () => {
  const changeGuideText = useChangeGuideText();
  return {
    validateForm: ({
      id,
      password,
      checkPasswd,
      isIdDuplicate,
      duplicateCheck,
    }: ValidateState): boolean => {
      const regExp = /^[a-zA-Z0-9]{8,15}$/;
      if (id === "") {
        changeGuideText({
          where: "id",
          text: "아이디를 입력해주세요.",
          isWarning: true,
        });
        return false;
      } else if (!duplicateCheck) {
        changeGuideText({
          where: "id",
          text: "아이디를 중복확인해주세요.",
          isWarning: true,
        });
        return false;
      } else if (isIdDuplicate) {
        changeGuideText({
          where: "id",
          text: "중복된 아이디입니다. 다시 입력해주세요.",
          isWarning: true,
        });
        return false;
      } else if (password === "") {
        changeGuideText({
          where: "password",
          text: "비밀번호를 입력해주세요.",
          isWarning: true,
        });
        return false;
      } else if (!regExp.test(password)) {
        changeGuideText({
          where: "password",
          text: "비밀번호 형식이 올바르지 않습니다.",
          isWarning: true,
        });
        return false;
      } else if (checkPasswd === "") {
        changeGuideText({
          where: "checkPasswd",
          text: "비밀번호 확인을 입력해주세요.",
          isWarning: true,
        });
        return false;
      } else if (password !== checkPasswd) {
        changeGuideText({
          where: "checkPasswd",
          text: "비밀번호가 일치하지 않습니다.",
          isWarning: true,
        });
        return false;
      }
      return true;
    },
  };
};
