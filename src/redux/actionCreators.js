import {
  GET_DATA,
  LOADING,
  FETCH_ERROR,
  GET_DETAIL,
  SORT_TYPE
} from "./actions";
import axios from "axios";

export function loading() {
  return { type: LOADING };
}

export const getData = () => {
  return dispatch => {
    dispatch(loading());
    axios
      .get(`https://api.tvmaze.com/search/shows?q=batman`)
      .then(res => {
        const movies = res.data;
        //To see loading screen
        setTimeout(() => {
          dispatch({ type: GET_DATA, movies: movies });
        }, 20);
      })
      .catch(err => {
        dispatch(fetchError(err.message));
      });
  };
};

export function fetchError(error) {
  return { type: FETCH_ERROR, error: error };
}

// http://api.tvmaze.com/shows/

export const getDetail = id => {
  return dispatch => {
    dispatch(loading());
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then(res => {
        const movieDetail = res.data;
        //To see loading screen
        setTimeout(() => {
          dispatch({ type: GET_DETAIL, movieDetail: movieDetail });
        }, 20);
      })
      .catch(err => {
        dispatch(fetchError(err.message));
      });
  };
};

export function sortType(sortType) {
  return { type: SORT_TYPE, sortType: sortType };
}
