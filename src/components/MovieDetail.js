import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarIconOutline from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  addToFavourites,
  removeFromFavourites,
  requestMovieDetail,
} from "../actions";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    "& button": {
      marginLeft: 24,
    },
    "& svg": {
      color: theme.colors.blue,
    },
  },
  movieDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      "& img": {
        maxWidth: 300,
      },
    },
    "& > div:nth-child(2)": {
      marginLeft: 24,
      [theme.breakpoints.down("sm")]: {
        marginTop: 24,
        marginLeft: 0,
      },
    },
  },
  detail: {
    marginBottom: 40,
  },
  redirectButton: {
    color: theme.colors.blue,
    marginBottom: 24,
  },
}));

function MovieDetail() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const favouriteMovies = useSelector((state) => state.movies.favouriteMovies);
  const detailsOfMovies = useSelector((state) => state.movies.detailsOfMovies);
  const fetchingError = useSelector((state) => state.movies.fetchingError);
  const isLoading = useSelector((state) => state.movies.isLoading);

  const movieId = window.location.pathname.split("/").pop();
  const movieDetail = detailsOfMovies[movieId];

  React.useEffect(() => {
    !detailsOfMovies[movieId] && dispatch(requestMovieDetail(movieId));
  }, [movieId, detailsOfMovies, dispatch]);

  const starButton = (
    <IconButton
      aria-label="delete"
      onClick={() =>
        dispatch(
          favouriteMovies[movieId]
            ? removeFromFavourites(movieId)
            : addToFavourites(movieDetail)
        )
      }
    >
      {favouriteMovies[movieId] ? <StarIcon /> : <StarIconOutline />}
    </IconButton>
  );

  if (fetchingError) {
    return <ErrorMessage errorMessage={fetchingError} />;
  }

  if (!movieDetail || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Button
        size="small"
        className={classes.redirectButton}
        onClick={() => history.goBack()}
      >
        ← Return Back
      </Button>
      <div className={classes.header}>
        <Typography variant="h4" gutterBottom>
          {movieDetail.Title}
        </Typography>
        {starButton}
      </div>
      <Typography variant="subtitle1" gutterBottom>
        Rating: {movieDetail.imdbRating}/10 <br />
        Votes: {movieDetail.imdbVotes}
      </Typography>
      <div className={classes.movieDetails}>
        <img
          src={
            movieDetail.Poster !== "N/A"
              ? movieDetail.Poster
              : "https://critics.io/img/movies/poster-placeholder.png"
          }
          alt={movieDetail.Title}
        />
        <div>
          <Typography variant="subtitle1" className={classes.detail}>
            <b>
              {movieDetail.Genre} | {movieDetail.Year} | {movieDetail.Country} |{" "}
              {movieDetail.Runtime}
            </b>
          </Typography>
          <Typography variant="subtitle1" className={classes.detail}>
            {movieDetail.Plot}
          </Typography>
          <Typography variant="subtitle1">
            <b>Stars:</b> {movieDetail.Actors}
            <br />
            <b>Director:</b> {movieDetail.Director}
            <br />
            <b>Awards:</b> {movieDetail.Awards ? movieDetail.Awards : "none"}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
