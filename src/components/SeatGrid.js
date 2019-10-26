import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import SeatButton from "./SeatButton";

const movieData = {
  status: "success",
  title: "Wojownicy Solvro, Więzień KNSI",
  sessions: [1561372200, 1561379400, 1561386600, 1561390200],
  arrangement: {
    A: [
      { "1": 1 },
      { "2": 0 },
      { "3": 1 },
      { "4": 1 },
      { "5": 1 },
      { "6": 0 },
      { "7": 1 }
    ],
    B: [
      { "1": 1 },
      { "2": 1 },
      { "3": 0 },
      { "4": 1 },
      { "5": 1 },
      { "6": 1 },
      { "7": 1 },
      { "8": 1 }
    ],
    C: [
      { "1": 1 },
      { "2": 0 },
      { "3": 0 },
      { "4": 1 },
      { "5": 0 },
      { "6": 0 },
      { "7": 0 },
      { "8": 1 },
      { "9": 0 }
    ],
    D: [
      { "1": 0 },
      { "2": 0 },
      { "3": 1 },
      { "4": 0 },
      { "5": 1 },
      { "6": 0 },
      { "7": 0 },
      { "8": 1 },
      { "9": 0 }
    ],
    E: [
      { "1": 1 },
      { "2": 1 },
      { "3": 1 },
      { "4": 0 },
      { "5": 0 },
      { "6": 1 },
      { "7": 1 },
      { "8": 1 },
      { "9": 0 }
    ],
    F: [
      { "1": 0 },
      { "2": 0 },
      { "3": 0 },
      { "4": 0 },
      { "5": 1 },
      { "6": 0 },
      { "7": 1 },
      { "8": 0 },
      { "9": 0 }
    ],
    G: [
      { "1": 1 },
      { "2": 1 },
      { "3": 1 },
      { "4": 1 },
      { "5": 1 },
      { "6": 1 },
      { "7": 1 },
      { "8": 1 },
      { "9": 1 }
    ]
  }
};
const desktopR = 34;
const mobileR = 26;

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    maxWidth: 600,
    // backgroundColor: "#00ff00"
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 600
    }
  },
  labelDiv: {
    verticalAlign: "middle",
    padding: theme.spacing(0.2),

    textAlign: "center",
    fontSize: mobileR / 2,
    width: mobileR,
    height: mobileR,
    // backgroundColor: "#ff0000",
    margin: theme.spacing(0.2),
    [theme.breakpoints.up("sm")]: {
      width: desktopR,
      height: desktopR,
      margin: theme.spacing(0.5),
      padding: theme.spacing(0.5),

      fontSize: desktopR / 2
    }
  },
  paper: {
    textAlign: "center",
    margin: theme.spacing(3),
    padding: theme.spacing(0.4),
    backgroundColor: theme.palette.primary.main
  }
}));

const SeatGrid = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>EKRAN</Paper>
        </Grid>
      </Grid>
      {Object.keys(movieData.arrangement).map(row => (
        <Grid container justify="center" spacing={0} key={row}>
          <RowLabel row={row} />
          {movieData.arrangement[row].map(seat => (
            <Grid item key={Object.keys(seat)[0]}>
              <SeatButton
                number={Object.keys(seat)[0]}
                occupied={seat[Object.keys(seat)[0]]}
              />
            </Grid>
          ))}
          <RowLabel row={row} />
        </Grid>
      ))}
    </div>
  );
};

const RowLabel = props => {
  const classes = useStyles();
  return (
    <Grid item>
      <div className={classes.labelDiv}>
        <Typography variant="body1">{props.row}</Typography>
      </div>
    </Grid>
  );
};

export default SeatGrid;
