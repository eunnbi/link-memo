import { SuccessResponse } from ".";

export interface AuthResponse extends SuccessResponse {
  userId?: number;
}

export interface AuthState {
  id: string;
  password: string;
  checkPasswd?: string;
}
