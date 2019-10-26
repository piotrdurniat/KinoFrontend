// react components
import React from "react";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import "typeface-roboto";
// routes
import Inbox from "./routes/Inbox";
import Starred from "./routes/Starred";
import NotFound from "./routes/NotFound";
import Search from "./routes/Search";
// my components
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import useStyles from "./components/Styles.js";
import ConsecutiveSnackbar from "./components/ConsecutiveSnackbar";
// material ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import { ThemeProvider } from "@material-ui/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const App = props => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: blue,
      secondary: red
    }
  });

  const classes = useStyles();
  const alertQueue = React.useRef([]); // useRef( <this thing becomes .current> )
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState(null);

  const processQueue = () => {
    if (alertQueue.current.length > 0) {
      setAlertMessage(alertQueue.current.shift());
      setAlertOpen(true);
    }
  };

  const showAlert = message => {
    alertQueue.current.push({
      message,
      key: new Date().getTime()
    });
    if (alertOpen) {
      setAlertOpen(false);
    } else {
      processQueue();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <ResponsiveDrawer />

          <div className={classes.content}>
            <div className={classes.toolbar} />

            <ConsecutiveSnackbar
              alertQueue={alertQueue}
              showAlert={showAlert}
              open={alertOpen}
              setOpen={setAlertOpen}
              processQueue={processQueue}
              messageInfo={alertMessage}
            />

            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mail/inbox" />}
              />
              <Route
                path="/mail/inbox"
                render={() => <Inbox showAlert={showAlert} />}
              />
              <Route path="/mail/starred" component={Starred} />
              <Route path="/search/:phrase" component={Search} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
