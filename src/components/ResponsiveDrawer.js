// Based on:
// https://medium.com/@tsubasakondo_36683/create-responsive-drawer-menu-with-react-material-ui-617a42764b69

import React from "react";
import Hidden from "@material-ui/core/Hidden";
import useStyles from "./Styles.js";
import MobileDrawer from "./MobileDrawer";
import DesktopDrawer from "./DesktopDrawer";
import NavBar from "./NavBar";

const ResponsiveDrawer = props => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobileDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <NavBar toggleMobileDrawer={toggleMobileDrawer} />

      <nav className={classes.drawer}>
        {/* Hidden for small and larger devices */}
        <Hidden smUp implementation="js">
          <MobileDrawer
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            toggleMobileDrawer={toggleMobileDrawer}
          />
        </Hidden>

        {/*  Hidden for xs and smaller devices */}
        <Hidden xsDown implementation="js">
          <DesktopDrawer />
        </Hidden>
      </nav>
    </>
  );
};

export default ResponsiveDrawer;
