import React from "react";

// material ui
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

// custom components
import SeatButton from "./SeatButton";
import movieData from "./MovieData";
import useStyles from "./SeatGridStyles.js";

const SeatGrid = props => {
  const classes = useStyles();
  const seats = movieData.arrangement;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Paper className={classes.screen}>EKRAN</Paper>
        </Grid>
      </Grid>

      {/* Iterate through every row of seats */}
      {Object.keys(seats).map(row => (
        <Grid container justify="center" spacing={0} key={row}>
          <RowLabel row={row} />

          {/* Iterate throung every seat of this row */}
          {seats[row].map(seat => {
            const seatNum = Object.keys(seat)[0];
            return (
              <Grid item key={seatNum}>
                <SeatButton
                  number={seatNum}
                  row={row}
                  occupied={seat[seatNum]}
                  addSeat={props.addSeat}
                  removeSeat={props.removeSeat}
                />
              </Grid>
            );
          })}
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
      <div className={classes.rowLabel}>
        <Typography variant="body1">{props.row}</Typography>
      </div>
    </Grid>
  );
};

export default SeatGrid;
