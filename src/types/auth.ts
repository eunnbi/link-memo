import { SuccessResponse } from ".";

export interface AuthResponse extends SuccessResponse {
  userId?: number;
}

export interface AuthState {
  id: string;
  password: string;
}

export interface LoginState extends AuthState {
  warningText: string;
}

export interface RegisterState extends AuthState {
  checkPasswd: string;
  isIdDuplicate: boolean;
  duplicateCheck: boolean;
  guideText: IGuideText;
}

export interface IGuideText {
  where: "id" | "password" | "checkPasswd" | "";
  text: string;
  isWarning: boolean;
}
