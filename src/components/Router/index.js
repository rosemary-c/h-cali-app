import { makeStyles } from '@material-ui/core/styles';
import WorkoutRoutineHomePage from 'pages/Home';
import WorkoutExercisesPage from 'pages/WorkoutExercisesPage';
import EditExerciseProgressionPage from 'pages/EditProgressionPage';
import NavBar from 'components/NavBar';
import React from 'react';
import { useStorage } from "hooks/useStorage";
import { Route, Redirect, Switch } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  body: {
    padding: theme.spacing(2),
  },
}));

function Router() {
  const classes = useStyles();
  const {
    currentWorkoutId,
    incrementWorkout,
    resetStorage,
    selectedProgressions,
    setProgressions,
    setWorkout,
    workoutHistory,
    setWorkoutHistory,
  } = useStorage();

  return (
    <>
      <NavBar resetStorage={resetStorage} />
      <div className={classes.body}>
        <Switch>
          <Redirect exact from="/" to="/routines/hamptons" />
          <Route exact path="/routines/:rid">
            <WorkoutRoutineHomePage
              wid={currentWorkoutId}
              selectedProgressions={selectedProgressions}
              setWorkout={setWorkout}
            />
          </Route>
          <Route exact path="/routines/:rid/workouts/:wid/exercises">
            <WorkoutExercisesPage
              incrementWorkout={incrementWorkout}
              selectedProgressions={selectedProgressions}
              workoutHistory={workoutHistory}
              setWorkoutHistory={setWorkoutHistory}
            />
          </Route>
          <Route exact path="/routines/:rid/workouts/:wid/exercises/:eid">
            <EditExerciseProgressionPage
              selectedProgressions={selectedProgressions}
              setProgressions={setProgressions}
            />
          </Route>
          <Redirect to="/routines/hamptons" />
        </Switch>
      </div>
    </>
  );
}

export default Router;
