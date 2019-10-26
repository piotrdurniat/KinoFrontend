import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';

import SeatGrid from "../components/SeatGrid";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const Inbox = props => {
  const [selectedSeats, selectSeats] = React.useState(["A3", "A5", "B4"]);
  const [ticketType, setTicketType] = React.useState('Normalny');
  const types = [
    {
      type: "Normalny",
      price: 14.90
    },
    {
      type: "Dziecko",
      price: 14.90
    },
    {
      type: "Student",
      price: 14.90
    },
    {
      type: "Uczeń",
      price: 14.90
    },
    {
      type: "Senior",
      price: 14.90
    }
  ];

  const handleChange = prop => event => {
    setTicketType(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5">Wojownicy Solvro, Więzień KNSI</Typography>
      <Typography variant="body2">
        sobota, 26 października, godz. 12:30, sala 4
      </Typography>

      <SeatGrid />

      <Typography variant="body1">Wybrane miejsca:</Typography>
      {selectedSeats.map(seat => (
        <div key={seat}>
          <TextField
            select
            variant="outlined"
            label="Rodzaj biletu"
            className={clsx(classes.margin, classes.textField)}
            value={ticketType}
            onChange={handleChange("weightRange")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{seat}: </InputAdornment>
              )
            }}
          >
            {types.map(t => (
              <MenuItem key={t.type} value={t.type}>
                {t.type}: {t.price} zł
              </MenuItem>
            ))}
          </TextField>
        </div>
      ))}

      <Grid container justify="space-evenly">
        <Grid item>
          <Button variant="outlined" className={classes.margin}>
            Powrót
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" className={classes.margin}>
            Kontynuuj
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Inbox;
