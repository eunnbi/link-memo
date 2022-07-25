import { LoginState } from "../types/auth";

const CHANGE_INPUT = "login/CHANGE_INPUT" as const;
const SET_WARNING_TEXT = "login/SET_WARNING_TEXT" as const;

export const changeInput = (name: string, value: string) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const setWarningText = (text: string) => ({
  type: SET_WARNING_TEXT,
  text,
});

const initialState: LoginState = {
  id: "",
  password: "",
  warningText: "",
};

type LoginAction =
  | ReturnType<typeof changeInput>
  | ReturnType<typeof setWarningText>;

const login = (
  state: LoginState = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_WARNING_TEXT:
      return {
        ...state,
        warningText: action.text,
      };
    default:
      return state;
  }
};

export default login;
