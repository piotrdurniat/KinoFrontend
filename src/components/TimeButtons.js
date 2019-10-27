import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <Grid container justify="space-evenly">
      {props.showTimes.map(time => {
        const timeFormatted = new Intl.DateTimeFormat("pl", {
          timeZone: "Europe/Warsaw",
          hour: "numeric",
          minute: "numeric"
        }).format(time);

        return (
          <Grid item key={timeFormatted}>
            <Fab
              component={Link}
              to={"/checkout/" + time.getTime()/1000}
              variant="extended"
              size="small"
              aria-label="add"
              className={classes.button}
            >
              {timeFormatted}
            </Fab>
          </Grid>
        );
      })}
    </Grid>
  );
};
