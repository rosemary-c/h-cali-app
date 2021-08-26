import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

const timerSize = "300px";

const useStyles = makeStyles((theme) => ({
  shapeCircle: {
    margin: "auto",
    borderRadius: "50%",
    width: timerSize,
    height: timerSize,
    backgroundColor: "#12acff",
    position: "relative",
  },
  text: {
    color: "white",
    lineHeight: timerSize,
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
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
      <div className={classes.shapeCircle}>
        <Typography align="center" variant="h1" className={classes.text}>
          {new Date(1000 * seconds).toISOString().substr(14, 5)}
        </Typography>
      </div>
    </Modal>
  );
}
