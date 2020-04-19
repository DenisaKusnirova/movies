export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const SET_PAGE = "SET_PAGE";
export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const REQUEST_ADDITIONAL_MOVIES = "REQUEST_ADDITIONAL_MOVIES";
export const RECEIVE_ADDITIONAL_MOVIES = "RECEIVE_ADDITIONAL_MOVIES";
export const REQUEST_MOVIE_DETAIL = "REQUEST_MOVIE_DETAIL";
export const RECEIVE_MOVIE_DETAIL = "RECEIVE_MOVIE_DETAIL";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const SET_LOADING = "SET_LOADING";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    searchTerm,
  }
}

export function setPage(page) {
  return {
    type: SET_PAGE,
    page,
  }
}

export function requestMovies(searchTerm) {
  return {
    type: REQUEST_MOVIES,
    searchTerm,
  };
}

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies,
  };
}

export function requestAdditionalMovies(searchTerm, page) {
  return {
    type: REQUEST_ADDITIONAL_MOVIES,
    searchTerm,
    page,
  };
}

export function receiveAdditionalMovies(additionalMovies) {
  return {
    type: RECEIVE_ADDITIONAL_MOVIES,
    additionalMovies,
  };
}

export function requestMovieDetail(movieId) {
  return {
    type: REQUEST_MOVIE_DETAIL,
    movieId,
  };
}

export function receiveMovieDetail(movie) {
  return {
    type: RECEIVE_MOVIE_DETAIL,
    movie,
  };
}

export function handleRequestError(fetchingError) {
  return {
    type: REQUEST_ERROR,
    fetchingError,
  };
}

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading,
  };
}

export function addToFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie,
  };
}

export function removeFromFavourites(movieId) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movieId,
  };
}
