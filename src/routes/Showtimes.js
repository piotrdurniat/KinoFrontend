// react
import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// material ui
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

// custom components
import MovieCard from "../components/MovieCard";
import Checkout from "../components/Checkout";
import HandleApiCall from "../components/HandleApiCall";

const useStyles = makeStyles(theme => ({
  content: {
    margin: "auto",
    padding: theme.spacing(2),
    maxWidth: 1300,
    [theme.breakpoints.up(600 + 230 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3)
    }
  }
}));

export default props => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date(1561372200000)
  );

  const renderFunction = result => {
    const showTimes = result.sessions.map(session => new Date(session * 1000));
    let showsInSelectedDay = [];

    if (selectedDate instanceof Date) {
      const s = selectedDate;
      showsInSelectedDay = showTimes.filter(
        t =>
          t.getYear() === s.getYear() &&
          t.getMonth() === s.getMonth() &&
          t.getDay() === s.getDay()
      );
    }

    if (showsInSelectedDay.length > 0) {
      return <MovieCard title={result.title} showTimes={showsInSelectedDay} />;
    }

    return <Typography variant="h6">Brak dostępnych seansów</Typography>;
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  let match = useRouteMatch();

  return (
    <div className={classes.content}>
      <Typography variant="h3">Repertuar</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Wybierz dzień seansu"
          format="dd.MM.yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
      <HandleApiCall
        data={{
          movie: "78483421"
        }}
        url="http://localhost:5000/movie"
        renderFunction={renderFunction}
      />
    </div>
  );
};
