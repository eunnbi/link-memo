import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthResponse, AuthState } from "../../types/auth";
import { register } from "../../api/auth";

export const usePostRegister = () => {
  const navigation = useNavigate();
  return useMutation<AuthResponse, unknown, AuthState>(
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
};
