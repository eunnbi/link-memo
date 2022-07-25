import React from "react";
import { useDispatch } from "react-redux";
import { changeInput } from "../../../modules/login";

export const useChangeInput = () => {
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeInput(name, value));
  };
  const changeInputValue = (name: string, value: string) => {
    dispatch(changeInput(name, value));
  };
  return { onChange, changeInputValue };
};
