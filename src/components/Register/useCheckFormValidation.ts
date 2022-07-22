import React, { SetStateAction } from "react";
import { IGuideText } from "./RegisterForm";

export const useCheckFormValidation = (
  setGuideText: React.Dispatch<SetStateAction<IGuideText>>
) => {
  const regExp = /^[a-zA-Z0-9]{8,15}$/;
  const checkFormValidation = (
    id: string,
    password: string,
    checkPasswd: string,
    duplicateCheck: boolean,
    IsDuplicate: boolean
  ) => {
    if (id === "") {
      setGuideText({
        where: "id",
        text: "아이디를 입력해주세요.",
        isWarning: true,
      });
      return false;
    } else if (!duplicateCheck) {
      setGuideText({
        where: "id",
        text: "아이디를 중복확인해주세요.",
        isWarning: true,
      });
      return false;
    } else if (IsDuplicate) {
      setGuideText({
        where: "id",
        text: "중복된 아이디입니다. 다시 입력해주세요.",
        isWarning: true,
      });
      return false;
    } else if (password === "") {
      setGuideText({
        where: "password",
        text: "비밀번호를 입력해주세요.",
        isWarning: true,
      });
      return false;
    } else if (!regExp.test(password)) {
      setGuideText({
        where: "password",
        text: "비밀번호 형식이 올바르지 않습니다.",
        isWarning: true,
      });
      return false;
    } else if (checkPasswd === "") {
      setGuideText({
        where: "checkPasswd",
        text: "비밀번호 확인을 입력해주세요.",
        isWarning: true,
      });
      return false;
    } else if (password !== checkPasswd) {
      setGuideText({
        where: "checkPasswd",
        text: "비밀번호가 일치하지 않습니다.",
        isWarning: true,
      });
      return false;
    }
    return true;
  };
  return { checkFormValidation };
};
