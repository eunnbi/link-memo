import { useCallback, useState } from "react";

export const useAlert = () => {
  const [show, setShow] = useState(false);
  const onAlert = useCallback(() => setShow(true), []);
  const onClose = useCallback(() => setShow(false), []);
  return { show, onAlert, onClose };
};
