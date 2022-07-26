import { useEffect } from "react";
import { useLoginState } from "./useLoginState";
import { useChangeInput } from "./useChangeInput";
import { useDispatch } from "react-redux";
import { setSaveId, toggleSaveId } from "../../../modules/login";

const ID = "id" as const;

export const useSaveId = () => {
  const { saveId, id } = useLoginState();
  const { changeInputValue } = useChangeInput();
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleSaveId());
  };

  useEffect(() => {
    const value = localStorage.getItem(ID);
    if (value == null) return;
    dispatch(setSaveId(true));
    changeInputValue("id", JSON.parse(value));
  }, []);

  useEffect(() => {
    if (saveId) {
      localStorage.setItem(ID, JSON.stringify(id));
    } else {
      localStorage.removeItem(ID);
    }
  }, [saveId, id]);

  return { saveId, onToggle };
};
