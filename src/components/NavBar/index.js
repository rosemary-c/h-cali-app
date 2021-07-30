import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
}));

export default function NavBar({ incrementWorkout, resetStorage }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [rid, setRoutineId] = React.useState("hamptons");
  const [showFinish, setShowFinish] = React.useState(false);
  const [showExerciseName, setShowExercise] = React.useState(false);
  const eid = location.pathname.split("/").pop();

  React.useEffect(() => {
    const newRid = location.pathname.split("/")[2];
    setRoutineId(newRid);

    setShowFinish(location.pathname.endsWith("/exercises"));
    setShowExercise(location.pathname.includes("/exercises/"));
  }, [location.pathname]);

  const handleFinish = () => {
    incrementWorkout();
    history.push(location.pathname.replace(/\/workouts.*$/, "")); // go home
  };
  
  const handleReset = () => {
    resetStorage();
  };

  const handleBackToWorkout = () => {
    const path = location.pathname.split("/").slice(0, -1).join("/");
    history.push(path);
  };;

  return (
    <AppBar position="static">
      <Toolbar>
        {showExerciseName ? (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleBackToWorkout}
          >
            <ArrowBackIcon />
          </IconButton>
        ) : (
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
        <Button className={classes.title} onClick={() => history.push(`/routines/${rid}`)}>
          <Typography variant="h6">
            {showExerciseName ? eid.replace("_", " ") : "Hybrid Calisthenics"}
          </Typography>
        </Button>
        {showFinish ? (
          <Button color="inherit" onClick={handleFinish}>
            Finish
          </Button>
        ) : (
          <Button color="inherit" onClick={handleReset}>
            Reset
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
