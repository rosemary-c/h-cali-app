import React from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { makeStyles } from '@material-ui/core/styles';
import { routines } from 'data';
import RoutineTable from 'components/Routine';

const useStyles = makeStyles(() => ({
  group: {
    width: '100%',
  },
  btn: {
    width: '50%',
  },
}));

function WorkoutRoutine() {
  const classes = useStyles();
  const [routineName, setRoutine] = React.useState('hamptons');
  const [workoutIdx, setWorkout] = React.useState(0);
  const routine = routines[routineName];

  return (
    <>
      <ToggleButtonGroup
        value={routineName}
        indicatorColor="primary"
        exclusive={true}
        onChange={(_, value) => value && setRoutine(value)}
        aria-label="Hybrid Calisthenics Routines"
      >
        <ToggleButton className={classes.btn} value="hamptons" aria-label="Hampton's Routine">
          Hampton's Routine
        </ToggleButton>
        <ToggleButton className={classes.btn} value="workweek" aria-label="Work Week Routine">
          Work Week Routine
        </ToggleButton>
      </ToggleButtonGroup>
      {routine.map((workouts, i) => <RoutineTable workouts={workouts} idx={i} isActive={i === workoutIdx} />)}
    </>
  );
}

export default WorkoutRoutine;
