export const initialState = {
  watchlist: [],
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) =>
            movie.imdbID !== action.payload
        ),
      };

    default:
      return state;
  }
};