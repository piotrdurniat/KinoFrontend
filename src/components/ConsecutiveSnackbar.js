import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

export default function ConsecutiveSnackbars(props) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setOpen(false);
  };

  const handleExited = () => {
    props.processQueue();
  };

  const classes = useStyles();
  return (
    <div>
      <Snackbar
        key={props.messageInfo ? props.messageInfo.key : undefined}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            {props.messageInfo ? props.messageInfo.message : undefined}
          </span>
        }
        action={[
          <Button
            key="undo"
            color="secondary"
            size="small"
            onClick={handleClose}
          >
            UNDO
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
}
