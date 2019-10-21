import React from "react";
import DrawerLinks from "./DrawerLinks";
import Drawer from "@material-ui/core/Drawer";

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
