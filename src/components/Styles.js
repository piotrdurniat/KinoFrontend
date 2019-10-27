import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 230;

export default makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      // Small ad larger devices
      width: drawerWidth, // Set drawer width, so it doesn't show on top of a text
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: 0
  },
  routePaper: {
    margin: "auto",
    padding: theme.spacing(2),
    maxWidth: 1300,
    [theme.breakpoints.up(600 + 230 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3)
    }
  }
}));
