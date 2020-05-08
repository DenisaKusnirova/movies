import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroller";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import MovieCard from "./MovieCard";
import {
  requestAdditionalMovies,
  requestMovies,
  setSearchTerm,
  setPage,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "./ErrorMessage";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    maxWidth: 400,
    minWidth: 280,
    marginBottom: 48,
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 8,
  },
  searchResults: {
    display: "flex",
    flexWrap: "wrap",
  },
  gridItem: {
    display: "flex",
  },
}));

function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.searchResults);
  const page = useSelector((state) => state.movies.currentPage);
  const searchTerm = useSelector((state) => state.movies.searchTerm);
  const allSearchResults = useSelector(
    (state) => state.movies.allSearchResults
  );
  const fetchingError = useSelector((state) => state.movies.fetchingError);
  const isLoading = useSelector((state) => state.movies.isLoading);

  React.useEffect(() => {
    if (!movies.length) {
      dispatch(requestMovies("movie"));
    }
  }, [dispatch, movies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestMovies(searchTerm));
    dispatch(setPage(1));
  };

  const loadMoreMovies = () => {
    dispatch(requestAdditionalMovies(searchTerm, page + 1));
    dispatch(setPage(page + 1));
  };

  const searchField = (
    <Paper
      component="form"
      className={classes.paper}
      onSubmit={(e) => handleSubmit(e)}
    >
      <InputBase
        className={classes.input}
        placeholder="Search For A Movie"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );

  const grid = (
    <Grid container spacing={3} wrap="wrap" alignItems="stretch">
      {!isLoading &&
        !fetchingError &&
        movies &&
        movies.map((movie, index) => {
          return (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={index}
              className={classes.gridItem}
            >
              <MovieCard
                title={movie.Title}
                image={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://critics.io/img/movies/poster-placeholder.png"
                }
                id={movie.imdbID}
                favouriteMovieDetail={false}
              />
            </Grid>
          );
        })}
    </Grid>
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Movies
      </Typography>
      {searchField}
      {fetchingError && <ErrorMessage errorMessage={fetchingError} />}
      {isLoading && <p>Loading...</p>}
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        loadMore={loadMoreMovies}
        hasMore={movies.length < allSearchResults}
        useWindow={true}
        loader={
          isLoading && (
            <div className="loader" key={0}>
              Loading ...
            </div>
          )
        }
      >
        {grid}
      </InfiniteScroll>
    </div>
  );
}

export default Dashboard;
