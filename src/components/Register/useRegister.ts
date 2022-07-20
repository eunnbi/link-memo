import React, { useRef, Dispatch, SetStateAction } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { register, getIsIdDuplicate } from "../../api/auth";
import { AuthRequestVariables, AuthResponse } from "../../types/auth";
import { IGuideText } from "./RegisterForm";
import { TypePredicateKind } from "typescript";

export const useRegister = (
  id: string,
  passwd: string,
  checkPasswd: string,
  setGuideText: Dispatch<SetStateAction<IGuideText>>
) => {
  const navigation = useNavigate();
  const { mutate } = useMutation<AuthResponse, unknown, AuthRequestVariables>(
    ({ id, password }) => register(id, password),
    {
      retry: 1,
      onError: () => {
        alert("회원가입에 실패하였습니다. 다시 진행해주세요");
      },
      onSuccess: (data) => {
        if (data.success) navigation("/", { state: { register: true } });
        else alert("회원가입에 실패하였습니다. 다시 진행해주세요");
      },
    }
  );
  const duplicateCheck = useRef(false);
  const IsDuplicate = useRef(false);
  const checkIdDuplicate = () => {
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

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regExp = /^[a-zA-Z0-9]{8,15}$/;
    if (id === "") {
      setGuideText({
        where: "id",
        text: "아이디를 입력해주세요.",
        isWarning: true,
      });
      return;
    } else if (!duplicateCheck.current) {
      setGuideText({
        where: "id",
        text: "아이디를 중복확인해주세요.",
        isWarning: true,
      });
      return;
    } else if (IsDuplicate.current) {
      setGuideText({
        where: "id",
        text: "중복된 아이디입니다. 다시 입력해주세요.",
        isWarning: true,
      });
      return;
    } else if (passwd === "") {
      setGuideText({
        where: "passwd",
        text: "비밀번호를 입력해주세요.",
        isWarning: true,
      });
      return;
    } else if (!regExp.test(passwd)) {
      setGuideText({
        where: "passwd",
        text: "비밀번호 형식이 올바르지 않습니다.",
        isWarning: true,
      });
      return;
    } else if (checkPasswd === "") {
      setGuideText({
        where: "checkPasswd",
        text: "비밀번호 확인을 입력해주세요.",
        isWarning: true,
      });
      return;
    } else if (passwd !== checkPasswd) {
      setGuideText({
        where: "checkPasswd",
        text: "비밀번호가 일치하지 않습니다.",
        isWarning: true,
      });
      return;
    }
    mutate({ id, password: passwd });
  };
  return {
    onRegister,
    checkIdDuplicate,
  };
};
