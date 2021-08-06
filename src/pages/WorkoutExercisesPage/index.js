import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { routines } from 'data';
import { useParams } from "react-router-dom";
import ExerciseSetCard from 'components/ExerciseSetCard';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: `${theme.spacing(2)} ${theme.spacing(1)}`
  }
}));

function WorkoutExercisesPage({
  selectedProgressions,
  workoutHistory,
  setWorkoutHistory,
  incrementWorkout,
}) {
  const classes = useStyles();
  const { rid = "hamptons", wid: widParams = 0 } = useParams();
  const history = useHistory();
  const wid = parseInt(widParams);
  const exercises = routines[rid][wid] || [];
  const workoutLogState = React.useState({});
  const [log] = workoutLogState;

  const handleFinishWorkout = () => {
    const newHistory = { ...workoutHistory };

    for (const key in log) {
      if (!newHistory[key]) {
        newHistory[key] = [];
      }

      newHistory[key].push({
        date: Date.now(),
        sets: log[key],
      });
    }

    setWorkoutHistory(newHistory);
    incrementWorkout();
    history.push(window.location.pathname.replace(/\/workouts.*$/, "")); // go home
  };

  return (
    <div className={classes.wrapper}>
      <Typography variant="h5" gutterBottom>
        {`Workout ${String.fromCharCode(65 + wid)}`}
      </Typography>
      {exercises.map((eid) => (
        <ExerciseSetCard
          key={eid}
          eid={eid}
          selectedProgressions={selectedProgressions}
          workoutHistory={workoutHistory}
          workoutLogState={workoutLogState}
        />
      ))}
      <Button
        disabled={!Object.keys(log).length}
        variant="contained"
        color="primary"
        size={"large"}
        fullWidth={true}
        onClick={handleFinishWorkout}
      >
        Finish Workout
      </Button>
    </div>
  );
}

export default WorkoutExercisesPage;
