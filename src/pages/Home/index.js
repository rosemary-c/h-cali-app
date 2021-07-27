import React from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core';
import { routines } from 'data';
import RoutineTable from 'components/RoutineCard';
import { useSessionStorage } from 'hooks/useSessionStorage';
import { useHistory, useParams } from "react-router-dom";

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

function WorkoutRoutineHomePage() {
  const classes = useStyles();
  const history = useHistory();
  const { rid = 'hamptons' } = useParams();
  const { currentWorkoutId: wid } = useSessionStorage();

  const workouts = [
    ...routines[rid].slice(wid),
    ...routines[rid].slice(0, wid)
  ];
  const btnClass = (value) => `${classes.btn} ${rid === value ? classes.active : ''}`;

  return (
    <>
      <ToggleButtonGroup
        className={classes.group}
        value={rid}
        exclusive={true}
        onChange={(_, value) => value && history.push(`/routines/${value}`)}
        aria-label="Hybrid Calisthenics Routines"
      >
        <ToggleButton className={btnClass('hamptons')} value="hamptons" aria-label="Hampton's Routine">
          Hampton's Routine
        </ToggleButton>
        <ToggleButton className={btnClass('workweek')} value="workweek" aria-label="Work Week Routine">
          Work Week Routine
        </ToggleButton>
      </ToggleButtonGroup>
      {workouts.map((exercises, i) => <RoutineTable workouts={exercises} wid={i} isActive={i === wid} />)}
    </>
  );
}

export default WorkoutRoutineHomePage;
