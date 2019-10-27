import React from "react";
import { Redirect } from "react-router-dom";

// material ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

// custom components
import UserMenu from "./UserMenu";
import useStyles from "./NavBarStyle";

const NavBar = props => {
  const classes = useStyles();
  const [searchBoxValue, setSearchBoxValue] = React.useState("");
  const [redirectUrl, setRedirectUrl] = React.useState(null);

  const renderRedirect = () => {
    if (redirectUrl) {
      console.log("redirecting to: ", redirectUrl);
      return <Redirect to={redirectUrl} />;
    }
  };

  const handleSearchBoxChange = event => {
    setSearchBoxValue(event.target.value.toLowerCase());
  };

  const handleSearchBoxSubmit = event => {
    if (event.key === "Enter") {
      const path = "/search/" + encodeURIComponent(searchBoxValue);
      setRedirectUrl(path);
    }
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      {renderRedirect()}
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
          onClick={props.toggleMobileDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Kino Solvro
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            onKeyPress={handleSearchBoxSubmit}
            inputProps={{ "aria-label": "search" }}
            value={searchBoxValue}
            onChange={handleSearchBoxChange}
            onSubmit={() => alert("submit")}
          />
        </div>

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
