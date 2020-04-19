import { select, takeEvery, fork, put } from "redux-saga/effects";
import * as actions from "../actions";
import { REQUEST_MOVIES } from "../actions";
import { REQUEST_MOVIE_DETAIL } from "../actions";
import { REQUEST_ADDITIONAL_MOVIES } from "../actions";

const axios = require("axios");
const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY;

// Handle fetching movies
export function* fetchMovies({ searchTerm }) {
  yield put(actions.setLoading(true));
  const response = yield axios.get(
    `http://omdbapi.com/?apikey=${omdbApiKey}&s=${searchTerm}`
  );
  const fetchingError = response.data.Error;
  if (fetchingError) {
    yield put(actions.handleRequestError(fetchingError));
  } else {
    yield put(actions.receiveMovies(response.data));
  }
  yield put(actions.setLoading(false));
}

// Handle fetching additional movies
export function* fetchAdditionalMovies({ searchTerm, page }) {
  yield put(actions.setLoading(true));
  const response = yield axios.get(
    `http://omdbapi.com/?apikey=${omdbApiKey}&s=${searchTerm}&page=${page}`
  );
  const fetchingError = response.data.Error;
  if (!fetchingError) {
    yield put(actions.receiveAdditionalMovies(response.data));
  }
  yield put(actions.setLoading(false));
}

// Handle fetching movie detail
export function* fetchMovieDetail({ movieId }) {
  yield put(actions.setLoading(true));
  const response = yield axios.get(
    `http://omdbapi.com/?apikey=${omdbApiKey}&i=${movieId}`
  );
  const fetchingError = response.data.Error;
  if (fetchingError) {
    yield put(actions.handleRequestError(fetchingError));
  }
  yield put(actions.receiveMovieDetail(response.data));
  yield put(actions.setLoading(false));
}

// Logger
export function* logger() {
  yield takeEvery("*", function* logger(action) {
    const state = yield select();

    console.log("action", action);
    console.log("state after", state);
  });
}

export default function* root() {
  yield takeEvery(REQUEST_MOVIES, fetchMovies);
  yield takeEvery(REQUEST_ADDITIONAL_MOVIES, fetchAdditionalMovies);
  yield takeEvery(REQUEST_MOVIE_DETAIL, fetchMovieDetail);
  yield fork(logger);
}
