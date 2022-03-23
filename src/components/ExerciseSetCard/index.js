import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from "react-router-dom";
import { progressions } from 'data';
import { getExerciseVariation, getSetRepStr } from 'utils/helper';
import RepBtn from 'components/RepButton';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: `16px 0`,
  },
  set: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    minWidth: "50px",
  },
  edit: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
  },
  btn: {
    verticalAlign: "sub",
  },
  grid: {
    marginTop: theme.spacing(1),
  },
  field: {
    marginTop: theme.spacing(2),
  },
}));

export default function ExerciseSetCard({
  eid,
  pid,
  workoutHistory,
  workoutLogState,
}) {
  const history = useHistory();
  const classes = useStyles();
  const exercise = progressions[eid][pid];
  const [log, setLog] = workoutLogState;
  const exerciseProgressionId = `${eid}-${pid}`;
  const exerciseProgressionId_OLD = `${eid}_${pid}`; // TODO: deprecated, to be deleted

  const handleEditClick = () => history.push(`${window.location.pathname}/${eid}`);
  const getPreviousWorkout = () => {
    const exerciseLogs =
      workoutHistory[exerciseProgressionId] || workoutHistory[exerciseProgressionId_OLD] || [];
    const lastLog = exerciseLogs.slice(-1)[0]; // { date: number, sets: number[], notes: string }

    return lastLog ? {
      log: `${new Date(lastLog.date).toLocaleString()}: [ ${lastLog.sets.join(" | ")} ]`,
      notes: lastLog.notes,
    } : {
      log: 'New Progression!'
    };
  };
  const handleClickRep = (rep, i) => {
    const exerciseLog = log[exerciseProgressionId] || log[exerciseProgressionId_OLD] || [];
    exerciseLog[i] = rep;

    setLog({ ...log, [exerciseProgressionId]: exerciseLog });
  };

  const exerciseLog = getPreviousWorkout();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.action}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography variant="h6" align="left" component="span">
              {getExerciseVariation(exercise)}
            </Typography>
            <IconButton
              aria-label="edit"
              color="primary"
              component="span"
              size="small"
              onClick={handleEditClick}
              className={classes.btn}
            >
              <EditIcon className={classes.edit} />
            </IconButton>
            <Typography align="left" component="p" color="textSecondary">
              {/* trainer notes */}
              {exercise.note ?? ""}
            </Typography>
          </Box>
          <Box className={classes.set}>
            <Typography align="right" color="textSecondary">
              {getSetRepStr(exercise)}
            </Typography>
          </Box>
        </Box>

        {exerciseLog && (
          <Typography color="textSecondary" variant="caption">
            <Box fontFamily="Monospace">{exerciseLog.log}</Box>
            {exerciseLog.notes && <Box fontFamily="Monospace">Notes: {exerciseLog.notes}</Box>}
          </Typography>
        )}

        <Grid container spacing={2} className={classes.grid}>
          {[...Array(exercise.setValue)].map((_, i) => (
            <Grid item xs={4} key={i}>
              <RepBtn repValue={exercise.repValue} handleClick={(rep) => handleClickRep(rep, i)} />
            </Grid>
          ))}
        </Grid>
        <TextField
          id={`${exerciseProgressionId}_input`}
          // hack: consumed by parent handleFinish via js querySelector
          className={classes.field}
          fullWidth
          label="Notes"
          size="small"
          variant="outlined"
        />
      </CardContent>
    </Card>
  );
}
