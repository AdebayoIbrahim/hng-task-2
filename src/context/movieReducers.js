//setting up reducers
const MovieReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_TOP":
      return {
        ...state,
        movies: action.payload,
        loading: false,
        onSearch: false,
      };
    case "FETCH_MOVIES_ALL":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "SEARCH_LIST":
      return {
        ...state,
        onSearch: true,
        movies: action.payload,
        loading: false,
      };

    case "SEARCH_INP": {
      return {
        ...state,
        SearchVal: action.payload,
      };
    }
    case "CLEAR_MOVIES": {
      return { ...state, movies: [], SearchVal: null };
    }
    default:
      return state;
  }
};

export default MovieReducer;
