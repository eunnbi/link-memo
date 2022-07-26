import React from "react";
import { useDispatch } from "react-redux";
import { changeInput } from "../../../modules/login";

export const useChangeInput = () => {
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeInput(name as "id" | "password", value));
  };
  const changeInputValue = (name: "id" | "password", value: string) => {
    dispatch(changeInput(name, value));
  };
  return { onChange, changeInputValue };
};
