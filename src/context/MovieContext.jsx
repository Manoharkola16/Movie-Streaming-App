import {
  createContext,
  useReducer,
} from "react";

import {
  movieReducer,
  initialState,
} from "../reducer/MovieReducer";

export const MovieContext =
  createContext();

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    movieReducer,
    initialState
  );

  return (
    <MovieContext.Provider
      value={{
        watchlist: state.watchlist,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;