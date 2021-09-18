import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Cancel";

const timerSize = "300px";

const useStyles = makeStyles((theme) => ({
  shapeCircle: {
    borderRadius: "50%",
    width: timerSize,
    height: timerSize,
    backgroundColor: "#12acff",
    position: "relative",
    margin: theme.spacing(3),
  },
  text: {
    color: "white",
    lineHeight: timerSize,
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    position: "relative",
  },
  btn: {
    position: "absolute",
    right: 0,
    color: "lightgray",
  },
}));

export default function TimerModal({ onClose }) {
  const classes = useStyles();
  const [seconds, setTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <Modal
      open={true}
      onClose={onClose}
      className={classes.modal}
      disableAutoFocus={true}
      disableEnforceFocus={true}
    >
      <div className={classes.body}>
        <IconButton className={classes.btn} aria-label="delete" onClick={onClose} color="lightgray">
          <CloseIcon fontSize="large" />
        </IconButton>
        <div className={classes.shapeCircle}>
          <Typography align="center" variant="h1" className={classes.text}>
            {new Date(1000 * seconds).toISOString().substr(14, 5)}
          </Typography>
        </div>
      </div>
    </Modal>
  );
}
