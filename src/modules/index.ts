import { combineReducers } from "redux";
import linkMemo from "./linkMemo";

const rootReducer = combineReducers({
  linkMemo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
