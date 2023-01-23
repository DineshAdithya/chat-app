import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { initialData } from "./actionData";
import { actions } from "./actionData";
// import { data } from "../data";

export const DataContext = React.createContext({});

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  //   const datas = initialData.data;
  const value = {
    ...state,
    showMessages: (message) => {
      console.log("chucghu", message);
      dispatch({ type: actions.SHOW_MESSAGES, payload: message });
    },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
// export const DataProvider = DataContext.Provider;
// export default DataContext;
