import { LoginState } from "../types/auth";

const CHANGE_INPUT = "login/CHANGE_INPUT" as const;
const SET_WARNING_TEXT = "login/SET_WARNING_TEXT" as const;
const TOGGLE_SAVE_ID = "login/TOGGLE_SAVE_ID" as const;
const SET_SAVE_ID = "login/SET_SAVE_ID" as const;
const INITIALIZE = "login/INITIALIZE" as const;

export const changeInput = (name: "id" | "password", value: string) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const setWarningText = (text: string) => ({
  type: SET_WARNING_TEXT,
  text,
});

export const toggleSaveId = () => ({
  type: TOGGLE_SAVE_ID,
});

export const setSaveId = (value: boolean) => ({
  type: SET_SAVE_ID,
  value,
});

export const initialize = () => ({
  type: INITIALIZE,
});

const initialState: LoginState = {
  id: "",
  password: "",
  warningText: "",
  saveId: false,
};

type LoginAction =
  | ReturnType<typeof changeInput>
  | ReturnType<typeof setWarningText>
  | ReturnType<typeof toggleSaveId>
  | ReturnType<typeof setSaveId>
  | ReturnType<typeof initialize>;

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
    case TOGGLE_SAVE_ID:
      return {
        ...state,
        saveId: !state.saveId,
      };
    case SET_SAVE_ID:
      return {
        ...state,
        saveId: action.value,
      };
    case INITIALIZE:
      return {
        ...state,
        id: "",
        password: "",
        warningText: "",
      };
    default:
      return state;
  }
};

export default login;
