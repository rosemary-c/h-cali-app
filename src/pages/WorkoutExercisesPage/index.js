import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { lighten, Typography } from '@material-ui/core';
import { routines } from 'data';
import { useParams } from "react-router-dom";
import ExerciseSetCard from 'components/ExerciseSetCard';

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

function WorkoutExercisesPage({ selectedProgressions }) {
  const classes = useStyles();
  const { rid = "hamptons", wid: widParams = 0 } = useParams();
  const wid = parseInt(widParams);
  const exercises = routines[rid][wid] || [];

  return (
    <div className={classes.wrapper}>
      <Typography variant="h5" gutterBottom>
        {`Workout ${String.fromCharCode(65 + wid)}`}
      </Typography>
      {exercises.map((eid) => (
        <ExerciseSetCard eid={eid} selectedProgressions={selectedProgressions} />
      ))}
    </div>
  );
}

export default WorkoutExercisesPage;
