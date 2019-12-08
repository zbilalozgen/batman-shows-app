import {
  GET_DATA,
  LOADING,
  FETCH_ERROR,
  GET_DETAIL,
  SORT_TYPE
} from "./actions";

const rootReducer = function(
  state = {
    movies: [],
    loading: false,
    error: null,
    movieDetail: { image: {}, genres: [], rating: {} },
    sort: ""
  },
  action
) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        movies: [...action.movies],
        _movies: [...action.movies],
        loading: false,
        error: null
      };
    case LOADING:
      return { ...state, loading: true };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.error };
    case GET_DETAIL:
      return {
        ...state,
        movieDetail: action.movieDetail,
        loading: false,
        error: null
      };
    case SORT_TYPE:
      return { ...state, sort: action.sortType };
    default:
      return state;
  }
};

export default rootReducer;
