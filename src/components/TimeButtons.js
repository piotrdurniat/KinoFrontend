import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default props => {
  const classes = useStyles();

  const handleCheckout = event => {};

  return (
    <Grid container justify="space-evenly">
      {props.showTimes.map(time => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        return (
          <Grid item key={hours + " " + minutes}>
            <Fab
              variant="extended"
              size="small"
              aria-label="add"
              className={classes.button}
              onClick={handleCheckout}
            >
              {hours + ":" + minutes}
            </Fab>
          </Grid>
        );
      })}
    </Grid>
  );
};
