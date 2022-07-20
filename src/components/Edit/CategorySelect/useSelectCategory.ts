import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../../modules/linkMemo";
import { RootState } from "../../../modules";
import { useCallback } from "react";

export const useSelectCategory = () => {
  const { category } = useSelector(
    (rootState: RootState) => rootState.linkMemo
  );
  const dispatch = useDispatch();
  const onSelect = useCallback((id: number, value: string) => {
    dispatch(changeCategory(id, value));
  }, []);
  return {
    category,
    onSelect,
  };
};
