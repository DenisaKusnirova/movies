import {
  RECEIVE_MOVIES,
  RECEIVE_ADDITIONAL_MOVIES,
  REQUEST_ERROR,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  RECEIVE_MOVIE_DETAIL,
  SET_LOADING,
  SET_SEARCH_TERM, SET_PAGE,
} from "../actions";

const initialState = {
  searchTerm: "",
  currentPage: 1,
  searchResults: [],
  allSearchResults: null,
  favouriteMovies: {},
  detailsOfMovies: {},
  fetchingError: "",
  isLoading: false,
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MOVIES: {
      return {
        ...state,
        searchResults: [...action.movies.Search],
        allSearchResults: action.movies.totalResults,
        fetchingError: "",
        currentPage: 1,
      };
    }
    case RECEIVE_ADDITIONAL_MOVIES:
      return {
        ...state,
        searchResults: [
          ...state.searchResults,
          ...action.additionalMovies.Search,
        ],
        fetchingError: "",
        currentPage: state.currentPage++,
      };
    case RECEIVE_MOVIE_DETAIL: {
      return {
        ...state,
        detailsOfMovies: {
          ...state.movieDetails,
          [action.movie.imdbID]: {
            ...action.movie,
          },
        },
        fetchingError: "",
      };
    }
    case REQUEST_ERROR:
      return {
        ...state,
        fetchingError: `An error occurred: ${action.fetchingError}`,
        searchTerm: "",
        currentPage: 1,
        searchResults: [],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favouriteMovies: {
          ...state.favouriteMovies,
          [action.movie.imdbID]: {
            ...action.movie,
          },
        },
      };
    case REMOVE_FROM_FAVOURITES:
      const { [action.movieId]: deleted, ...newState } = state.favouriteMovies;
      return { ...state, favouriteMovies: newState };
    default:
      return state;
  }
}

export default moviesReducer;
