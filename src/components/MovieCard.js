import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { removeFromFavourites } from "../actions";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 240,
    [theme.breakpoints.up("sm")]: {
      width: 300,
    },
    "& button": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch",
    },
    "& a": {
      textDecoration: "none",
      "& button": {
        color: theme.colors.blue,
      },
    },
  },
  cardFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "& svg": {
      color: theme.colors.blue,
    },
  },
}));

function MovieCard({ title, image, id, favouriteMovieDetail }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(`/detail/${id}`)}>
        <CardMedia
          component="img"
          alt={title}
          image={image}
          title={title}
          height={260}
        />
      </CardActionArea>
      <div className={classes.cardFooter}>
        <CardContent>
          <Typography variant="subtitle1">{title}</Typography>
        </CardContent>
        {favouriteMovieDetail && (
          <CardActions className={classes.cardActions}>
            <IconButton
              aria-label="delete"
              onClick={() => dispatch(removeFromFavourites(id))}
            >
              <StarIcon />
            </IconButton>
          </CardActions>
        )}
      </div>
    </Card>
  );
}

export default MovieCard;
