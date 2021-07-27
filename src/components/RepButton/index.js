import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  active: {
    color: 'white !important',
    backgroundColor: theme.palette.primary.main,
  },
  btn: {
    color: 'lightgray',
    width: '100%',
    borderRadius: '4px',
    border: 'none',
  },
}));

export default function RepButton({ repValue }) {
  const [rep, setRep] = React.useState(repValue);
  const [isActive, setActive] = React.useState(false);
  const classes = useStyles();
  
  const handleActiveClick = () => {
    if (rep === 0) setActive(false);
    setRep(rep < 1 ? repValue : rep - 1);
  };
  const handleInactiveClick = () => {
    setActive(true);
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
