import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      // Small ad larger devices
      width: drawerWidth, // Set drawer width, so it doesn't show on top of a text
      flexShrink: 0 // Not sure what that does
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default useStyles;