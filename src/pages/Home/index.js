import React from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core';
import { routines } from 'data';
import RoutineTable from 'components/RoutineCard';
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

function WorkoutRoutineHomePage({ wid, selectedProgressions, setWorkout }) {
  const classes = useStyles();
  const history = useHistory();
  const { rid = "hamptons" } = useParams();

  const workouts = routines[rid];
  const btnClass = (value) => `${classes.btn} ${rid === value ? classes.active : ""}`;

  return (
    <>
      <ToggleButtonGroup
        className={classes.group}
        value={rid}
        exclusive={true}
        onChange={(_, value) => value && history.push(`/routines/${value}`)}
        aria-label="Hybrid Calisthenics Routines"
      >
        <ToggleButton
          className={btnClass("hamptons")}
          value="hamptons"
          aria-label="Hampton's Routine"
        >
          Hampton's Routine
        </ToggleButton>
        <ToggleButton
          className={btnClass("workweek")}
          value="workweek"
          aria-label="Work Week Routine"
        >
          Work Week Routine
        </ToggleButton>
      </ToggleButtonGroup>
      {workouts.map((exercises, i) => (
        <RoutineTable
          workouts={exercises}
          wid={i}
          isActive={i === wid}
          selectedProgressions={selectedProgressions}
          onClick={() => setWorkout(i)}
        />
      ))}

      <Button
        variant="contained"
        color="primary"
        width={1}
        onClick={() => history.push(`${window.location.pathname}/workouts/${wid}/exercises`)}
      >
        <Box width={1}>Start Workout</Box>
      </Button>
    </>
  );
}

export default WorkoutRoutineHomePage;
