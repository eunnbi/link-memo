import { SuccessResponse } from ".";

export interface AuthResponse extends SuccessResponse {
  userId?: number;
}

export interface AuthRequestVariables {
  id: string;
  password: string;
}
