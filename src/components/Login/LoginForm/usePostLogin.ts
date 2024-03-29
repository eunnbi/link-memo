import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/auth";
import { AuthState, AuthResponse } from "../../../types/auth";
import { storeUserId } from "../../../utils/auth";
import { useWarning } from "./useWarning";

export const usePostLogin = () => {
  const { changeWarningText } = useWarning();
  const navigate = useNavigate();
  return useMutation<AuthResponse, unknown, AuthState>(
    ({ id, password }) => login(id, password),
    {
      retry: 1,
      onError: () => {
        changeWarningText(
          "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
        );
      },
      onSuccess: (data) => {
        const { success, userId } = data;
        if (success) {
          storeUserId(userId!);
          navigate("/main");
        } else {
          changeWarningText(
            "아이디 혹은 비밀번호가 잘못 입력되었습니다. 다시 입력해주세요"
          );
        }
      },
    }
  );
};
