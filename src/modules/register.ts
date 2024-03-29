import { IGuideText, RegisterState } from "../types/auth";

const CHANGE_INPUT = "register/CHANGE_INPUT" as const;
const SET_DUPLICATE_VALUE = "register/SET_DUPLICATE_VALUE" as const;
const SET_GUIDE_TEXT = "register/SET_GUIDE_TEXT" as const;
const INITIALIZE = "register/INITIALIZE" as const;

export const changeInput = (name: string, value: string) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const setDuplicateValue = ({
  isIdDuplicate,
  duplicateCheck,
}: Pick<RegisterState, "isIdDuplicate" | "duplicateCheck">) => ({
  type: SET_DUPLICATE_VALUE,
  isIdDuplicate,
  duplicateCheck,
});

export const setGuideText = (guideText: IGuideText) => ({
  type: SET_GUIDE_TEXT,
  guideText,
});

export const initialize = () => ({
  type: INITIALIZE,
});

const initialState: RegisterState = {
  id: "",
  password: "",
  checkPasswd: "",
  isIdDuplicate: true,
  duplicateCheck: false,
  guideText: {
    where: "",
    text: "",
    isWarning: true,
  },
};

type RegisterAction =
  | ReturnType<typeof changeInput>
  | ReturnType<typeof setDuplicateValue>
  | ReturnType<typeof setGuideText>
  | ReturnType<typeof initialize>;

const register = (
  state: RegisterState = initialState,
  action: RegisterAction
): RegisterState => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_DUPLICATE_VALUE:
      return {
        ...state,
        isIdDuplicate: action.isIdDuplicate,
        duplicateCheck: action.duplicateCheck,
      };
    case SET_GUIDE_TEXT:
      return {
        ...state,
        guideText: action.guideText,
      };
    case INITIALIZE:
      return {
        id: "",
        password: "",
        checkPasswd: "",
        isIdDuplicate: true,
        duplicateCheck: false,
        guideText: {
          where: "",
          text: "",
          isWarning: true,
        },
      };
    default:
      return state;
  }
};

export default register;
