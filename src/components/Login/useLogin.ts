import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { AuthRequestVariables, AuthResponse } from "../../types/auth";
import { storeUserId } from "../../utils/auth";

export const useLogin = (id: string, password: string) => {
  const navigate = useNavigate();
  const [warningText, setWarningText] = useState("");
  const { isLoading, mutate } = useMutation<
    AuthResponse,
    unknown,
    AuthRequestVariables
  >(({ id, password }) => login(id, password), {
    retry: 1,
    onError: () => {
      setWarningText(
        "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
      );
    },
    onSuccess: (data) => {
      const { success, userId } = data;
      if (success) {
        storeUserId(userId!);
        setWarningText("");
        navigate("/main");
      } else {
        setWarningText(
          "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
        );
      }
    },
  });
  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id === "") {
      setWarningText("아이디를 입력해주세요.");
      return;
    }
    if (password === "") {
      setWarningText("비밀번호를 입력해주세요.");
      return;
    }
    mutate({ id, password });
  };

  return {
    isLoading,
    warningText,
    onLogin,
  };
};
