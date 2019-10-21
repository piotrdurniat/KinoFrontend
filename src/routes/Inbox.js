import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Inbox = props => {
  return (
    <>
      <Typography variant="h5">Inbox </Typography>
      <Button onClick={() => props.showAlert("alert text")}> Show alert </Button>
    </>
  );
};

export default Inbox;
