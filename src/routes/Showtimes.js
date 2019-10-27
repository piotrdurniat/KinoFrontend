// react
import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// material ui
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

// custom components
import MovieCard from "../components/MovieCard";
import Checkout from "../components/Checkout";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

export default props => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019.06.24")
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

  const data = {
    movie: "78483421"
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/checkout`}>
        <Checkout />
      </Route>
      {/*Default route*/}
      <Route path={match.path}>
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
          data={data}
          url="http://localhost:5000/movie"
          renderFunction={renderFunction}
        />
      </Route>
    </Switch>
  );
};

const HandleApiCall = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    error: null,
    isLoaded: false,
    result: null
  });

  React.useEffect(() => {
    fetch(props.url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(props.data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(result => {
        setState({ isLoaded: true, result: result });
      })
      .catch(error => {
        setState({ isLoaded: true, error: error });
      });
  });

  const { error, isLoaded } = state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <CircularProgress className={classes.progress} />;
  } else {
    let result = state.result;
    return props.renderFunction(result);
  }
};
