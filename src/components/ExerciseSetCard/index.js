import React from 'react';
import Typography from '@material-ui/core/Typography';
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
}));

export default function ExerciseSetCard({ eid, selectedProgressions }) {
  const history = useHistory();
  const classes = useStyles();
  const pid = parseInt(selectedProgressions[eid]) || 0;
  const exercise = progressions[eid][pid];

  const handleEditClick = () => history.push(`${window.location.pathname}/${eid}`);

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
          </Box>
          <Box className={classes.set}>
            <Typography align="right" color="textSecondary">
              {getSetRepStr(exercise)}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} className={classes.grid}>
          {[...Array(exercise.setValue)].map((_, i) => (
            <Grid item xs={4} key={i}>
              <RepBtn repValue={exercise.repValue} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
