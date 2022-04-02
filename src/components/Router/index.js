import WorkoutRoutineHomePage from 'pages/Home';
import WorkoutExercisesPage from 'pages/WorkoutExercisesPage';
import EditExerciseProgressionPage from 'pages/EditProgressionPage';
import NavBar from 'components/NavBar';
import React, { useContext } from 'react';
import { useLocation, Route, Redirect } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import "./index.css";
import WorkoutHistoryPage from 'pages/History';
import AppContext from "context/appContext";


function Router() {
  const location = useLocation();
  const [pathUrl, setPathUrl] = React.useState(location.pathname);
  const [animateDirection, setAnimateDirection] = React.useState(1);
  const { routineId } = useContext(AppContext);

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
      <NavBar />
      <div className="switch">
        <AnimatedSwitch
          atEnter={{ offset: 100 }}
          atLeave={{ offset: -100 }}
          atActive={{ offset: 0 }}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          <Redirect exact from="/" to={`/routines/${routineId}`} />
          <Route exact path="/routines/:rid">
            <WorkoutRoutineHomePage />
          </Route>
          <Route exact path="/routines/:rid/workouts/:wid/exercises">
            <WorkoutExercisesPage />
          </Route>
          <Route exact path="/routines/:rid/workouts/:wid/exercises/:eid">
            <EditExerciseProgressionPage />
          </Route>
          <Route exact path="/routines/:rid/history">
            <WorkoutHistoryPage />
          </Route>
          <Redirect to="/routines/hamptons" />
        </AnimatedSwitch>
      </div>
    </>
  );
}

export default Router;
