import React from "react";

// material ui
import Button from "@material-ui/core/Button";

//custom components
import useStyles from "./SeatGridStyles.js"

const SeatButton = props => {
  const [selected, setSelected] = React.useState(false);

  const classes = useStyles();

  const toggle = event => {
    if (selected) props.removeSeat(props.row, props.number);
    else props.addSeat(props.row, props.number);
    setSelected(!selected);
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
      onClick={toggle}
      className={classes.squareButton}
    >
      {props.number}
    </Button>
  );
};

export default SeatButton;
