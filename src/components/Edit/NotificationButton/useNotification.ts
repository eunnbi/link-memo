import { useEffect } from "react";
import { useToggle } from "../../../hooks/useToggle";

const SHOW = "show" as const;

export const useNotification = () => {
  const [showNotification, onToggle] = useToggle(true);

  useEffect(() => {
    const value = localStorage.getItem(SHOW);
    if (value === null) return;
    if (!JSON.parse(value)) {
      onToggle();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SHOW, JSON.stringify(showNotification));
  }, [showNotification]);
  return { showNotification, onToggle };
};
