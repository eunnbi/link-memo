import { useEffect } from "react";
import { useToggle } from "../../../hooks/useToggle";
import { useChangeInput } from "./useChangeInput";

const ID = "id" as const;

export const useSaveId = (id: string): [boolean, () => void] => {
  const [saveId, handleSaveId] = useToggle(false);
  const { changeInputValue } = useChangeInput();
  useEffect(() => {
    const value = localStorage.getItem("ID");
    if (value == null) return;
    handleSaveId();
    changeInputValue("id", JSON.parse(value));
  }, []);
  useEffect(() => {
    if (saveId) {
      localStorage.setItem(ID, JSON.stringify(id));
    } else {
      localStorage.removeItem(ID);
    }
  }, [saveId, id]);
  return [saveId, handleSaveId];
};
