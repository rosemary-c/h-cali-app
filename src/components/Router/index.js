import { makeStyles } from '@material-ui/core/styles';
import WorkoutRoutineHomePage from 'pages/Home';
import WorkoutExercisesPage from 'pages/WorkoutExercisesPage';
import EditExerciseProgressionPage from 'pages/EditProgressionPage';
import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: 'whitesmoke',
    padding: theme.spacing(2),
  },
}));

function Router() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Switch>
        <Redirect exact from="/" to="/routines/hamptons" />
        <Route exact path="/routines/:rid">
          <WorkoutRoutineHomePage />
        </Route>
        <Route exact path="/routines/:rid/workouts/:wid/exercises">
          <WorkoutExercisesPage />
        </Route>
        <Route exact path="/routines/:rid/workouts/:wid/exercises/:eid">
          <EditExerciseProgressionPage />
        </Route>
        <Redirect to="/routines/hamptons" />
      </Switch>
    </div>
  );
}

export default Router;
