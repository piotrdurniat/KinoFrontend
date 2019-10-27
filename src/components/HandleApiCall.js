// react
import React from "react";

// material ui
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

export default props => {
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
