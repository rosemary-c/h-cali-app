import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { routines } from 'data';
import { useParams } from "react-router-dom";
import ExerciseSetCard from 'components/ExerciseSetCard';
import TimeIcon from '@material-ui/icons/AccessTime';
import TimerModal from "components/TimerModal";
import { useHistory } from "react-router-dom";
import { progressions } from 'data';
import AppContext from "context/appContext";

const DISCORD_SERVER = "https://discord.gg/mDK27YHF3g";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: `${theme.spacing(2)} ${theme.spacing(1)}`,
  },
  finish: {
    color: 'white !important',
  },
  contact: {
    color: 'lightgrey',
    margin: theme.spacing(1),
  },
  discord: {
    color: 'lightgrey',
  },
  stopwatchBtn: {
    marginLeft: 'auto',
  },
}));

function WorkoutExercisesPage() {
  const classes = useStyles();
  const { rid = "hamptons", wid: widParams = 0 } = useParams();
  const {
    selectedProgressions,
    setProgressions,
    workoutHistory,
    setWorkoutHistory,
    incrementWorkout,
    loading,
  } = useContext(AppContext);

  const history = useHistory();
  const wid = parseInt(widParams);
  const exercises = routines[rid][wid] || [];
  const workoutLogState = React.useState({});
  const [showTimer, setShowTimer] = React.useState(false);
  const [log] = workoutLogState;

  const handleFinishWorkout = () => {
    const newHistory = { ...workoutHistory };

    for (const key in log) {
      // push current workout to history
      if (!newHistory[key]) {
        newHistory[key] = [];
      }

      const notes = document.getElementById(`${key}_input`)?.value ?? "";
      newHistory[key].push({
        date: Date.now(),
        sets: log[key],
        notes,
      });

      const [eid, pidStr] = key.split('-');
      const exercise = progressions[eid][pidStr];
      const pid = parseInt(pidStr);
      
      // workout complete, move to next progression if possible
      if (
        log[key].length === exercise.setValue &&
        log[key].every((repCount) => repCount === exercise.repValue) &&
        pid + 1 <= progressions[eid].length
      ) {
        setProgressions({
          ...selectedProgressions,
          [eid]: pid + 1,
        })
      }
    }

    setWorkoutHistory(newHistory);
    incrementWorkout();
    history.push(window.location.pathname.replace(/\/workouts.*$/, "")); // go home
  };

  const isFinishDisabled = !Object.keys(log).length;

  return (
    <div className={classes.wrapper}>
      <Box display='flex'>
        <Typography variant='h5'>{`Workout ${String.fromCharCode(65 + wid)} `}</Typography>
        <Button
          aria-label='stopwatch'
          color='primary'
          onClick={() => setShowTimer(true)}
          className={classes.stopwatchBtn}
          endIcon={<TimeIcon />}
        >
          Rest
        </Button>
      </Box>

      {!loading && exercises.map((eid) => (
        <ExerciseSetCard
          key={eid}
          eid={eid}
          pid={parseInt(selectedProgressions[eid]) || 0}
          workoutHistory={workoutHistory}
          workoutLogState={workoutLogState}
        />
      ))}

      <Button
        className={isFinishDisabled ? '' : classes.finish}
        disabled={isFinishDisabled}
        variant='contained'
        color='primary'
        size={'large'}
        fullWidth={true}
        onClick={handleFinishWorkout}
      >
        Finish Workout
      </Button>
      <div className={classes.contact}>
        Got suggestions? Chat with me on discord:{' '}
        <a
          className={classes.discord}
          href={DISCORD_SERVER}
          target='_blank'
          rel='noopener noreferrer'
        >
          {DISCORD_SERVER}
        </a>
      </div>
      {showTimer && <TimerModal onClose={() => setShowTimer(false)} />}
    </div>
  );
}

export default WorkoutExercisesPage;
