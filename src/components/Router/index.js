import { makeStyles } from '@material-ui/core/styles';
import WorkoutRoutineHomePage from 'pages/Home';
import WorkoutExercisesPage from 'pages/WorkoutExercisesPage';
import EditExerciseProgressionPage from 'pages/EditProgressionPage';
import NavBar from 'components/NavBar';
import React from 'react';
import { useStorage } from "hooks/useStorage";
import { useLocation, Route, Redirect } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import "./index.css";

const DISCORD_SERVER = "https://discord.gg/mDK27YHF3g";

const useStyles = makeStyles((theme) => ({
  contact: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: "lightgrey",
    position: "absolute",
  },
  discord: {
    color: "lightgrey",
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
  const location = useLocation();

  const [pathUrl, setPathUrl] = React.useState(location.pathname);
  const [animateDirection, setAnimateDirection] = React.useState(1);

  React.useEffect(() => {
    const direction = pathUrl.length <= location.pathname.length ? 1 : -1;
    setAnimateDirection(direction);
    setPathUrl(location.pathname);
    // eslint-disable-next-line
  }, [location.pathname]);

  const mapStyles = (styles) => ({
    transform: `translateX(${styles.offset * animateDirection}%)`,
  });

  return (
    <>
      <NavBar resetStorage={resetStorage} />
      <div className="switch">
        <AnimatedSwitch
          atEnter={{ offset: 100 }}
          atLeave={{ offset: -100 }}
          atActive={{ offset: 0 }}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
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
        </AnimatedSwitch>
        <div className={classes.contact}>
          Chat with me on discord:&nbsp;
          <a
            className={classes.discord}
            href={DISCORD_SERVER}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DISCORD_SERVER}
          </a>
        </div>
      </div>
    </>
  );
}

export default Router;
