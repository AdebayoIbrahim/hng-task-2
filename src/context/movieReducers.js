//setting up reducers

const MovieReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_TOP":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "GET_MOVIE":
      return {};
    default:
      return state;
  }
};

export default MovieReducer;
