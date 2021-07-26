import React from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core';
import { routines } from 'data';
import RoutineTable from 'components/Routine';

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
  }
}));

function WorkoutRoutine() {
  const classes = useStyles();
  const [routineName, setRoutine] = React.useState('hamptons');
  const [workoutIdx, setWorkout] = React.useState(0);
  const routine = routines[routineName];
  const btnClass = (value) => `${classes.btn} ${routineName === value ? classes.active : ''}`

  return (
    <>
      <ToggleButtonGroup
        className={classes.group}
        value={routineName}
        exclusive={true}
        onChange={(_, value) => value && setRoutine(value)}
        aria-label="Hybrid Calisthenics Routines"
      >
        <ToggleButton className={btnClass('hamptons')} value="hamptons" aria-label="Hampton's Routine">
          Hampton's Routine
        </ToggleButton>
        <ToggleButton className={btnClass('workweek')} value="workweek" aria-label="Work Week Routine">
          Work Week Routine
        </ToggleButton>
      </ToggleButtonGroup>
      {routine.map((workouts, i) => <RoutineTable workouts={workouts} idx={i} isActive={i === workoutIdx} />)}
    </>
  );
}

export default WorkoutRoutine;
