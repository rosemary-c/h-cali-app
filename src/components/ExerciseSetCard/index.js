import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
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
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  edit: {
    width: theme.spacing(2.5),
  },
}));

export default function ExerciseSetCard({ eid }) {
  const history = useHistory();
  const classes = useStyles();
  const pid = 0; // progression idx
  const exercise = progressions[eid][pid];

  const handleEditClick = () => history.push(`${window.location.pathname}/${eid}`);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.action}>
        <Grid container className={classes.grid} spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" align="left" component="span" gutterBottom>
              {getExerciseVariation(exercise)}
            </Typography>
            <IconButton aria-label="edit" color="primary" component="span" size="small" onClick={handleEditClick}>
              <Typography variant="body2" align="right" color="primary">
                <EditIcon className={classes.edit} />
              </Typography>
            </IconButton>
          </Grid>
          <Grid item xs={6} className={classes.set}>
            <Typography align="right" gutterBottom color="textSecondary">
              {getSetRepStr(exercise)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {[...Array(exercise.setValue)].map((_, i) =>
            <Grid item xs={4} key={i}>
              <RepBtn repValue={exercise.repValue} />
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
