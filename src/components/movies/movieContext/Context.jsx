import { useContext, createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

const INITIAL_STATE = {
  movies: [],
  isfetching: false,
  error: false,
};

export const MoviesContext = createContext(INITIAL_STATE);

export const MoviesContextArea = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <MoviesContext.Provider
      value={{
        state,
        movies: state.movies,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useGlobalMoviesContext = () => {
  return useContext(MoviesContext);
};
