import React from "react";
import clsx from "clsx";

//material ui
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";

// custom components
import SeatGrid from "./SeatGrid";

const useStyles = makeStyles(theme => ({
  alignCenter: {
    textAlign: "center"
    // backgroundColor: "#003300"
  },
  ticketInput: {
    margin: theme.spacing(1),
    display: "flex",
    flex: 1
  },
  movieTitle: {
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem"
    }
  },
  movieDate: {
    fontSize: "0.8rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9rem"
    }
  }
}));


const tickets = [
  {
    type: "Normalny",
    price: 15.99
  },
  {
    type: "Dziecko",
    price: 14.9
  },
  {
    type: "Student",
    price: 14.9
  },
  {
    type: "Uczeń",
    price: 14.9
  },
  {
    type: "Senior",
    price: 14.9
  }
];

const ChooseSeat = props => {
  const classes = useStyles();
  const [selectedSeats, setSelectedSeats] = React.useState([]);

  const addSeat = (row, num) => {
    const seat = { row, num, type: tickets[0].type };
    // const seat = { row, num };

    setSelectedSeats([...selectedSeats, seat]);
  };

  const removeSeat = (row, num) => {
    setSelectedSeats(
      selectedSeats.filter(seat => seat.row !== row || seat.num !== num)
    );
  };

  const changeTicketType = (seat, type) => {
    const index = selectedSeats.indexOf(seat);
    const newSeats = selectedSeats;
    newSeats[index].type = type;

    setSelectedSeats([...newSeats]);
  };

  return (
    <>
      <Typography align="center" variant="h5" className={classes.movieTitle}>
        Wojownicy Solvro, Więzień KNSI
      </Typography>
      <Typography align="center" variant="body2" className={classes.movieDate}>
        sobota, 26 października, godz. 12:30, sala 4
      </Typography>

      <SeatGrid
        selectedSeats={selectedSeats}
        addSeat={addSeat}
        removeSeat={removeSeat}
      />

      {selectedSeats.length > 0 ? (
        <Typography align="center" variant="body1">
          Wybrane miejsca:
        </Typography>
      ) : null}
      <div className={classes.alignCenter}>
        <TicketSelectionGroup
          seats={selectedSeats}
          changeTicketType={changeTicketType}
        />
      </div>
    </>
  );
};

const TicketSelectionGroup = props => {
  return (
    <Grid container justify="center" spacing={1}>
      {props.seats.map(seat => (
        <Grid item xs={12} sm={6} md={4} key={seat.row + seat.num}>
          <TicketSelectionInput
            seat={seat}
            changeTicketType={props.changeTicketType}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const TicketSelectionInput = props => {
  const classes = useStyles();
  const seat = props.seat;

  const handleChange = event => {
    props.changeTicketType(seat, event.target.value);
  };

  return (
    <TextField
      select
      required
      variant="outlined"
      label="Rodzaj biletu"
      className={clsx(classes.ticketInput, classes.textField)}
      value={seat.type || ""}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {seat.row + seat.num}:{" "}
          </InputAdornment>
        )
      }}
    >
      {tickets.map(t => (
        <MenuItem key={t.type} value={t.type}>
          {t.type}: {t.price} zł
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ChooseSeat;
