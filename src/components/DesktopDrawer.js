import React from "react";

// material ui
import Drawer from "@material-ui/core/Drawer";

// custom components
import DrawerLinks from "./DrawerLinks";
import useStyles from "./Styles.js";

const DesktopDrawer = props => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <DrawerLinks />
    </Drawer>
  );
};

export default DesktopDrawer;
