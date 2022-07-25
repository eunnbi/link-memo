import { LinkMemoState } from "../types/linkMemo";

const SET_EDIT_FORM = "edit/SET_EDIT_FORM" as const; // as const 이 문법을 쓰면 액션 함수를 통해 액션 객체를 만들면 type의 typescript 타입이 string이 아닌 실제값을 가리킨다.
const CHANGE_CATEGORY = "edit/CHANGE_CATEGORY" as const;
const CHANGE_INPUT_FIELD = "edit/CHANGE_INPUT_FIELD" as const;
const SET_WARNING_TEXT = "edit/SET_WARNING_TEXT" as const;
const INITIALIZE = "edit/INITIALIZE" as const;

export const setEditForm = (
  linkName: string,
  linkUrl: string,
  content: string,
  categoryId: number,
  categoryValue: string
) => ({
  type: SET_EDIT_FORM,
  linkName,
  linkUrl,
  content,
  categoryId,
  categoryValue,
});

export const changeCategory = (id: number, value: string) => ({
  type: CHANGE_CATEGORY,
  id,
  value,
});

export const changeInputField = (name: string, value: string) => ({
  type: CHANGE_INPUT_FIELD,
  name,
  value,
});

export const initialize = () => ({
  type: INITIALIZE,
});

export const setWarningText = (text: string) => ({
  type: SET_WARNING_TEXT,
  text,
});

interface EditState extends LinkMemoState {
  warningText: string;
}

// 액션 객체 type
type EditAction =
  | ReturnType<typeof setEditForm>
  | ReturnType<typeof changeCategory>
  | ReturnType<typeof changeInputField>
  | ReturnType<typeof setWarningText>
  | ReturnType<typeof initialize>;

const initialState: EditState = {
  linkName: "",
  linkUrl: "",
  content: "",
  category: {
    categoryId: -1,
    categoryName: "",
  },
  warningText: "",
};

const edit = (
  state: EditState = initialState,
  action: EditAction
): EditState => {
  switch (action.type) {
    case SET_EDIT_FORM:
      return {
        ...state,
        linkName: action.linkName,
        linkUrl: action.linkUrl,
        content: action.content,
        category: {
          categoryId: action.categoryId,
          categoryName: action.categoryValue,
        },
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: {
          categoryId: action.id,
          categoryName: action.value,
        },
      };
    case CHANGE_INPUT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_WARNING_TEXT:
      return {
        ...state,
        warningText: action.text,
      };
    case INITIALIZE:
      return {
        linkName: "",
        linkUrl: "",
        content: "",
        category: {
          categoryId: -1,
          categoryName: "",
        },
        warningText: "",
      };
    default:
      return state;
  }
};

export default edit;
