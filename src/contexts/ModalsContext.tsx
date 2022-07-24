import React, { useState, createContext } from "react";

export interface OpendedModal {
  Component: (props: any) => JSX.Element;
  props: any;
}

// 현재 open된 modal들을 나타냄.
export const ModalsStateContext = createContext([] as OpendedModal[]);

// modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext({
  open: (Component: OpendedModal["Component"], props: any): void => {},
  close: (Component: OpendedModal["Component"]): void => {},
});

const ModalsProvider = ({ children }: React.PropsWithChildren) => {
  const [openedModals, setOpenedModals] = useState<OpendedModal[]>([]);
  const open = (Component: OpendedModal["Component"], props: any) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };
  const close = (Component: OpendedModal["Component"]) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  };

  const dispatch = { open, close };
  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};
export default ModalsProvider;
