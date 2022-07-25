import { combineReducers } from "redux";
import edit from "./edit";
import register from "./register";
import login from "./login";

const rootReducer = combineReducers({
  edit,
  register,
  login,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
