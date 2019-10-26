import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const mobileR = 26;
const desktopR = 34;

const SeatButton = props => {
  const [selected, setSelected] = React.useState(false);

  const useStyles = makeStyles(theme => ({
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

  const classes = useStyles();

  const toggleSelect = event => {
    setSelected(!selected);
    console.log(selected);
  };

  if (props.occupied === 1) {
    return (
      <Button variant="contained" className={classes.squareButton} disabled>
        {props.number}
      </Button>
    );
  }
  return (
    <Button
      variant="contained"
      color={selected ? "secondary" : "primary"}
      onClick={toggleSelect}
      className={classes.squareButton}
    >
      {props.number}
    </Button>
  );
};

export default SeatButton;
