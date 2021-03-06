import React, { useContext } from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core';
import { routines } from 'data';
import RoutineTable from 'components/RoutineCard';
import { useHistory, useParams } from "react-router-dom";
import AppContext from "context/appContext";

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
  const { rid = "hamptons" } = useParams();
  const { currentWorkoutId: wid, selectedProgressions, setWorkout, setRoutineId } = useContext(AppContext);

  const workouts = routines[rid];
  const btnClass = (value) => `${classes.btn} ${rid === value ? classes.active : ""}`;
  const goToWorkout = (i) => history.push(`${window.location.pathname}/workouts/${i}/exercises`);
  const handleCardClick = (i) => {
    setWorkout(i);
    setTimeout(() => goToWorkout(i), 100);
  };
  const handleRoutineToggle = (value) => {
    if (!value) return;

    setWorkout(0);
    setRoutineId(value);
    history.push(`/routines/${value}`);
  };

  return (
    <div>
      <ToggleButtonGroup
        className={classes.group}
        value={rid}
        exclusive={true}
        onChange={(_, value) => handleRoutineToggle(value)}
        aria-label="H. Calisthenics Routines"
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
          key={i}
          workouts={exercises}
          wid={i}
          isActive={i === wid}
          selectedProgressions={selectedProgressions}
          onClick={() => handleCardClick(i)}
          isCompact={rid !== 'hamptons'}
        />
      ))}

      <Button
        variant="contained"
        color="primary"
        size={"large"}
        fullWidth={true}
        onClick={() => goToWorkout(wid)}
      >
        Start Workout
      </Button>
    </div>
  );
}

export default WorkoutRoutineHomePage;
