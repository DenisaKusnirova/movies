import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 48,
  },
  redirectButton: {
    color: theme.colors.blue,
    marginBottom: 24,
  },
  gridItem: {
    display: "flex",
  },
}));

function FavouriteMovies() {
  const classes = useStyles();
  const favouriteMovies = useSelector((state) => state.movies.favouriteMovies);

  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        Favourite Movies
      </Typography>
      {!Object.keys(favouriteMovies).length &&
        "You have not added any movies to your fovourites yet."}
      <Grid container spacing={3} wrap="wrap" alignItems="stretch">
        {favouriteMovies &&
          Object.keys(favouriteMovies).map((movie, index) => {
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
                  favouriteMovieDetail={true}
                  title={favouriteMovies[movie].Title}
                  image={
                    favouriteMovies[movie].Poster !== "N/A"
                      ? favouriteMovies[movie].Poster
                      : "https://critics.io/img/movies/poster-placeholder.png"
                  }
                  id={favouriteMovies[movie].imdbID}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default FavouriteMovies;
