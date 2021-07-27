import { makeStyles } from '@material-ui/core/styles';
import WorkoutRoutineHomePage from 'pages/Home';
import WorkoutDetailsPage from 'pages/WorkoutDetailsPage';
import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  body: {
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
        <Route exact path="/routines/:rid/workouts/:wid">
          <WorkoutDetailsPage />
        </Route>
        <Route exact path="/routines/:rid/workouts/:wid/exercises">
          <div>exercises</div>
        </Route>
        <Route exact path="/routines/:rid/workouts/:wid/exercises/:eid">
          <div>edit exercises</div>
        </Route>
        <Redirect to="/routines/hamptons" />
      </Switch>
    </div>
  );
}

export default Router;
