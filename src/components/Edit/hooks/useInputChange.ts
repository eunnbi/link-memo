import { useDispatch } from "react-redux";
import { changeInputField } from "../../../modules/linkMemo";

export const useInputChange = () => {
  const dispatch = useDispatch();
  const onChangeInputField = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(changeInputField(e.target.name, e.target.value));
  };

  return onChangeInputField;
};
