import { LoginState } from "../../../types/auth";
import { useWarning } from "./useWarning";

type ValidateState = Pick<LoginState, "id" | "password">;

export const useValidation = () => {
  const { changeWarningText } = useWarning();
  const validateForm = ({ id, password }: ValidateState): boolean => {
    if (id === "") {
      changeWarningText("아이디를 입력해주세요.");
      return false;
    } else if (password === "") {
      changeWarningText("비밀번호를 입력해주세요.");
      return false;
    }
    return true;
  };
  return { validateForm };
};
