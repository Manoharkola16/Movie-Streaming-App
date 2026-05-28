import {
  createContext,
  useEffect,
  useReducer,
} from "react";

export const MovieContext =
  createContext();

const initialState = {
  watchlist:
    JSON.parse(
      localStorage.getItem(
        "watchlist"
      )
    ) || [],
};

const movieReducer = (
  state,
  action
) => {

  switch (action.type) {

    case "ADD_TO_WATCHLIST":

      const exists =
        state.watchlist.find(
          (movie) =>
            movie.imdbID ===
            action.payload.imdbID
        );

      if (exists) return state;

      return {
        ...state,
        watchlist: [
          ...state.watchlist,
          action.payload,
        ],
      };

    case "REMOVE_FROM_WATCHLIST":

      return {
        ...state,

        watchlist:
          state.watchlist.filter(
            (movie) =>
              movie.imdbID !==
              action.payload
          ),
      };

    default:
      return state;
  }
};

export const MovieProvider = ({
  children,
}) => {

  const [state, dispatch] =
    useReducer(
      movieReducer,
      initialState
    );

  // SAVE TO LOCAL STORAGE
  useEffect(() => {

    localStorage.setItem(
      "watchlist",

      JSON.stringify(
        state.watchlist
      )
    );

  }, [state.watchlist]);

  return (
    <MovieContext.Provider
      value={{
        watchlist:
          state.watchlist,

        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};