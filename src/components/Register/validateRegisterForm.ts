import { IGuideText } from "./RegisterForm";

export const validateRegisterForm = (
  id: string,
  password: string,
  checkPasswd: string,
  duplicateCheck: boolean,
  IsDuplicate: boolean
): IGuideText | true => {
  const regExp = /^[a-zA-Z0-9]{8,15}$/;
  if (id === "") {
    return {
      where: "id",
      text: "아이디를 입력해주세요.",
      isWarning: true,
    };
  } else if (!duplicateCheck) {
    return {
      where: "id",
      text: "아이디를 중복확인해주세요.",
      isWarning: true,
    };
  } else if (IsDuplicate) {
    return {
      where: "id",
      text: "중복된 아이디입니다. 다시 입력해주세요.",
      isWarning: true,
    };
  } else if (password === "") {
    return {
      where: "password",
      text: "비밀번호를 입력해주세요.",
      isWarning: true,
    };
  } else if (!regExp.test(password)) {
    return {
      where: "password",
      text: "비밀번호 형식이 올바르지 않습니다.",
      isWarning: true,
    };
  } else if (checkPasswd === "") {
    return {
      where: "checkPasswd",
      text: "비밀번호 확인을 입력해주세요.",
      isWarning: true,
    };
  } else if (password !== checkPasswd) {
    return {
      where: "checkPasswd",
      text: "비밀번호가 일치하지 않습니다.",
      isWarning: true,
    };
  }
  return true;
};
