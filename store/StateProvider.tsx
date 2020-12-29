import React from "react";
import { Context } from "./Context";
import { useGlobalState } from "./useGlobalState";

export const StateProvider: React.FC = ({ children }) => {
  const globalState = useGlobalState();
  return (
    <Context.Provider value={globalState as ContextDefault}>
      {children}
    </Context.Provider>
  );
};
