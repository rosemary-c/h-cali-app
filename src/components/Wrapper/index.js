import { makeStyles } from '@material-ui/core/styles';
import WorkoutRoutine from 'pages/WorkoutRoutine';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  body: {
   padding: theme.spacing(2),
  },
}));

function Body() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <WorkoutRoutine />
    </div>
  );
}

export default Body;
