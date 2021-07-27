import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core';
import { routines } from 'data';
import { useParams } from "react-router-dom";
import ExerciseCard from 'components/ExerciseCard';

const useStyles = makeStyles((theme) => ({
  group: {
    width: '100%',
  },
  btn: {
    width: '50%',
  },
  active: {
    backgroundColor: 'white !important',
    border: `1px solid ${lighten(theme.palette.primary.main, .5)} !important`,
    color: `${theme.palette.primary.main} !important`
  },
  wrapper: {
    margin: `${theme.spacing(2)} ${theme.spacing(1)}`
  }
}));

function WorkoutDetailsPage() {
  const classes = useStyles();
  const { rid = 'hamptons', wid = 0 } = useParams();
  const exercises = routines[rid][wid] || [];

  return (
    <div className={classes.wrapper}>
      {exercises.map(eid => <ExerciseCard eid={eid} />)}
    </div>
  );
}

export default WorkoutDetailsPage;
