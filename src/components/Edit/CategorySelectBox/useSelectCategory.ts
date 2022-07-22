import { useDispatch } from "react-redux";
import { changeCategory } from "../../../modules/linkMemo";
import { useCallback } from "react";

export const useSelectCategory = () => {
  const dispatch = useDispatch();
  const onSelect = useCallback((id: number, value: string) => {
    dispatch(changeCategory(id, value));
  }, []);
  return {
    onSelect,
  };
};
