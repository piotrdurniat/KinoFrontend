import React from "react";

// material ui
import Button from "@material-ui/core/Button";

//custom components
import useStyles from "./SeatGridStyles.js";

const SeatButton = props => {
  // const [selected, setSelected] = React.useState(false);

  const classes = useStyles();

  const toggle = event => {
    if (isSelected()) props.removeSeat(props.row, props.num);
    else props.addSeat(props.row, props.num);
    // setSelected(!selected);
  };

  const isSelected = () => {
    for (let seat of props.selectedSeats) {
      if (seat.row === props.row && seat.num === props.num) return true;
    }
    return false;
  };

  if (props.occupied === 1) {
    return (
      <Button variant="contained" className={classes.squareButton} disabled>
        {props.num}
      </Button>
    );
  }
  return (
    <Button
      variant="contained"
      color={isSelected() ? "secondary" : "primary"}
      onClick={toggle}
      className={classes.squareButton}
    >
      {props.num}
    </Button>
  );
};

export default SeatButton;
