import { useContext } from "react";
import { ModalsDispatchContext, OpendedModal } from "../contexts/ModalsContext";

export const useModal = () => {
  const { open, close } = useContext(ModalsDispatchContext);
  const openModal = (Component: OpendedModal["Component"], props: any = {}) => {
    open(Component, props);
  };
  const closeModal = (Component: OpendedModal["Component"]) => {
    close(Component);
  };
  return { openModal, closeModal };
};
