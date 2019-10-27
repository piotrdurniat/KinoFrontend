import React from "react";

// material ui
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { useTheme } from "@material-ui/core/styles";

// custom components
import DrawerLinks from "./DrawerLinks";
import useStyles from "./Styles";

const MobileDrawer = props => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <SwipeableDrawer
      anchor={theme.direction === "rtl" ? "right" : "left"}
      open={props.mobileOpen}
      onClose={() => props.setMobileOpen(false)}
      onOpen={() => props.setMobileOpen(true)}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
      onClick={props.toggleMobileDrawer}
    >
      <DrawerLinks />
    </SwipeableDrawer>
  );
};

export default MobileDrawer;
