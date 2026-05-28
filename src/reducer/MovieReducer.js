export const initialState = {
  watchlist: [],
};

export const movieReducer = (state, action) => {
  switch (action.type) {
   case "ADD_TO_WATCHLIST":

  const exists = state.watchlist.find(
    (item) => item.imdbID === action.payload.imdbID
  );

  if (exists) return state;

  return {
    ...state,
    watchlist: [...state.watchlist, action.payload],
  };
}
};