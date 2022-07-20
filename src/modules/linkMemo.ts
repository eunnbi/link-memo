import { LinkMemoState } from "../types/linkMemo";

const SET_LINK_MEMO = "bookmark/SET_LINK_MEMO" as const; // as const 이 문법을 쓰면 액션 함수를 통해 액션 객체를 만들면 type의 typescript 타입이 string이 아닌 실제값을 가리킨다.
const CHANGE_CATEGORY = "bookmark/CHANGE_CATEGORY" as const;
const CHANGE_INPUT_FIELD = "boomark/CHANGE_INPUT_FIELD" as const;
const INITIALIZE = "bookmark/INITIALIZE" as const;

export const setLinkMemo = (
  linkName: string,
  linkUrl: string,
  content: string,
  categoryId: number,
  categoryValue: string
) => ({
  type: SET_LINK_MEMO,
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
// 액션 객체 type
type LinkMemoAction =
  | ReturnType<typeof setLinkMemo>
  | ReturnType<typeof changeCategory>
  | ReturnType<typeof changeInputField>
  | ReturnType<typeof initialize>;

const initialState: LinkMemoState = {
  linkName: "",
  linkUrl: "",
  content: "",
  category: {
    categoryId: -1,
    categoryName: "",
  },
};

const linkMemo = (
  state: LinkMemoState = initialState,
  action: LinkMemoAction
): LinkMemoState => {
  switch (action.type) {
    case SET_LINK_MEMO:
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
    case INITIALIZE:
      return {
        linkName: "",
        linkUrl: "",
        content: "",
        category: {
          categoryId: -1,
          categoryName: "",
        },
      };
    default:
      return state;
  }
};

export default linkMemo;
