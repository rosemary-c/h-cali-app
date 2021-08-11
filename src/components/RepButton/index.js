import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#EFEFEF",
    border: "none",
    borderRadius: "4px",
    color: "lightgray",
    height: "40px",
    width: "100%",
  },
  active: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function RepButton({ repValue, handleClick }) {
  const [rep, setRep] = React.useState(repValue);
  const [isActive, setActive] = React.useState(false);
  const classes = useStyles();
  
  const handleActiveClick = () => {
    if (rep === 0) setActive(false);

    const newRep = rep < 1 ? repValue : rep - 1;
    setRep(newRep);
    handleClick(newRep);
  };
  const handleInactiveClick = () => {
    setActive(true);
    handleClick(repValue);
  };

  return isActive ? (
    <button className={`${classes.btn} ${classes.active}`} onClick={handleActiveClick}>
      <Typography variant="h6">
        {rep}
      </Typography>
    </button>
  ) : (
    <button className={classes.btn} onClick={handleInactiveClick}>
      <Typography variant="h6">
        {rep}
      </Typography>
    </button>
  );
}
