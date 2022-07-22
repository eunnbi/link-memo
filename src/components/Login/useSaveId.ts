import React, { useEffect } from "react";
import { useToggle } from "../../hooks/useToggle";
import { AuthState } from "../../types/auth";

const ID = "id" as const;

export const useSaveId = (
  id: string,
  setForm: React.Dispatch<AuthState>
): [boolean, () => void] => {
  const [saveId, handleSaveId] = useToggle(false);
  useEffect(() => {
    const value = localStorage.getItem("ID");
    if (value == null) return;
    handleSaveId();
    setForm({
      id: JSON.parse(value),
      password: "",
    });
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
