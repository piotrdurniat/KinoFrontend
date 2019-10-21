import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const PositionedSnackbar = props => {
  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal } = state;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      key={`${vertical},${horizontal}`}
      open={props.open}
      onClose={props.closeAlert}
      variant={props.variant}
      autoHideDuration={6000}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">{props.text}</span>}
    />
  );
};

export default PositionedSnackbar;
