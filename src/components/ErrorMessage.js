import React from "react";
import Typography from "@material-ui/core/Typography";
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  errorMessage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& svg': {
      width: 20,
      height: 20,
    }
  },
}));

function ErrorMessage({ errorMessage }) {
  const classes = useStyles();

  return (
    <Typography color="error" className={classes.errorMessage}>
      <PriorityHighIcon />
      {errorMessage}
    </Typography>
  );
}

export default ErrorMessage;
