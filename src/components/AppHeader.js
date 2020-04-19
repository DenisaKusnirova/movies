import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import PlayCircleFilledWhite from "@material-ui/icons/PlayCircleFilledWhite";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    flexGrow: 1,
    "& header": {
      padding: "24px 64px",
      [theme.breakpoints.down("sm")]: {
        padding: 24,
      },
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    "& span": {
      color: theme.colors.blue,
      marginRight: 64,
      [theme.breakpoints.down("sm")]: {
        marginRight: 24,
      },
    },
  },
  link: {
    color: theme.palette.secondary.main,
    marginRight: 48,
    textDecoration: "none",
    fontWeight: "bold",
    borderBottom: "2px solid transparent",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in-out",
    [theme.breakpoints.down("sm")]: {
      marginRight: 24,
    },
    "&:hover, &:focus": {
      borderBottom: `2px solid ${theme.colors.blue}`,
      color: theme.palette.primary.main,
    },
  },
  activeLink: {
    borderBottom: `2px solid ${theme.colors.blue}`,
    color: theme.palette.primary.main,
  },
}));

function AppHeader() {
  const classes = useStyles();

  const [currentPathName, setCurrentPathName] = React.useState(
    window.location.pathname
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Container maxWidth="lg" className={classes.container}>
          <Icon>
            <PlayCircleFilledWhite />
          </Icon>
          <Link
            to="/"
            onClick={() => setCurrentPathName("/")}
            className={classnames(classes.link, {
              [classes.activeLink]: currentPathName === "/",
            })}
          >
            Home
          </Link>
          <Link
            to="/favourites"
            onClick={() => setCurrentPathName("/favourites")}
            className={classnames(classes.link, {
              [classes.activeLink]: currentPathName === "/favourites",
            })}
          >
            Favourite Movies
          </Link>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppHeader;
