// react components
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// routes
import Checkout from "./components/Checkout";
import Search from "./routes/Search";
import NotFound from "./routes/NotFound";
import About from "./routes/About";
import Showtimes from "./routes/Showtimes";
import Events from "./routes/Events";
import Forum from "./routes/Forum";
import News from "./routes/News";

// components
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import useStyles from "./components/Styles.js";

// material ui
import "typeface-roboto";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { ThemeProvider } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const App = props => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      primary: blue,
      secondary: red
    }
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <ResponsiveDrawer />

          <div className={classes.content}>
            <div className={classes.toolbar} />
            <div className={classes.routePaper}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/repertuar"></Redirect>}
                />
                <Route path="/o_kinie" component={About} />
                <Route path="/repertuar" component={Showtimes} />
                <Route path="/wydarzenia" component={Events} />
                <Route path="/forum" component={Forum} />
                <Route path="/newsy" component={News} />
                <Route path="/promocje" component={Showtimes} />

                <Route path="/search/:phrase" component={Search} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
            <Route path="/checkout" component={Checkout} />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
