import { makeStyles } from "@material-ui/core/styles";

const desktopR = 34;
const mobileR = 22;

export default makeStyles(theme => ({
  root: {
    padding: 0,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    // backgroundColor: "#00ff00"
    minWidth: 300,
    [theme.breakpoints.up("sm")]: {
      minWidth: 600
    }
  },
  rowLabel: {
    verticalAlign: "middle",
    padding: theme.spacing(0.2),

    fontSize: mobileR / 2,
    width: mobileR,
    height: mobileR,
    // backgroundColor: "#ff0000",
    margin: theme.spacing(0.2),
    [theme.breakpoints.up("sm")]: {
      width: desktopR,
      height: desktopR,
      margin: theme.spacing(0.5),
      padding: theme.spacing(0.5),

      fontSize: desktopR / 2
    }
  },
  screen: {
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0.2),
    backgroundColor: theme.palette.primary.main,
    maxWidth: 500,
    justify: "center",
    fontSize: "0.7rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9rem"
    }
  },
  squareButton: {
    minWidth: mobileR,
    minHeight: mobileR,
    maxWidth: mobileR,
    maxHeight: mobileR,
    padding: 0,
    margin: theme.spacing(0.2),
    textAlign: "center",
    size: "large",
    fontSize: mobileR / 2,
    [theme.breakpoints.up("sm")]: {
      // For desktop
      margin: theme.spacing(0.5),
      minWidth: desktopR,
      maxWidth: desktopR,
      minHeight: desktopR,
      maxHeight: desktopR,
      fontSize: desktopR / 2
    }
  }
}));
