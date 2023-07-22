import { useContext, createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

const INITIAL_STATE = {
  users: [],
  isfetching: false,
  error: false,
};

export const dataUserContext = createContext(INITIAL_STATE);

export const DataUser = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <dataUserContext.Provider
      value={{
        users: state.users,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </dataUserContext.Provider>
  );
};

export const useGlobalUserData = () => {
  return useContext(dataUserContext);
};
