import React, { useState, createContext, useMemo, useCallback } from "react";

export interface OpendedModal {
  Component: (props: any) => JSX.Element;
  props: any;
}

type OpenModal = (Component: OpendedModal["Component"], props: any) => void;
type CloseModal = (Component: OpendedModal["Component"]) => void;

interface ModalsAction {
  open: OpenModal;
  close: CloseModal;
}

// 현재 open된 modal들을 나타냄.
export const ModalsStateContext = createContext([] as OpendedModal[]);

// modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext({
  open: (Component, props) => {},
  close: (Component) => {},
} as ModalsAction);

const ModalsProvider = ({ children }: React.PropsWithChildren) => {
  const [openedModals, setOpenedModals] = useState<OpendedModal[]>([]);

  const open: OpenModal = useCallback((Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  }, []);
  const close: CloseModal = useCallback((Component) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  }, []);

  const dispatch = useMemo(() => ({ open, close }), []);
  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsStateContext.Provider value={openedModals}>
        {children}
      </ModalsStateContext.Provider>
    </ModalsDispatchContext.Provider>
  );
};
export default ModalsProvider;
