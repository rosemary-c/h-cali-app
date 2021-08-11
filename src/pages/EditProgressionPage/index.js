import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useParams } from "react-router-dom";
import { progressions } from 'data';
import { getExerciseVariation, getSetRepStr } from 'utils/helper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: `16px 0`,
  },
  action: {
    padding: theme.spacing(2),
  },
  active: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
  },
}));

export default function EditExerciseProgressionPage({ selectedProgressions, setProgressions }) {
  const { eid } = useParams();
  const classes = useStyles();
  const exercises = progressions[eid];
  const pid = parseInt(selectedProgressions[eid]) || 0;

  const handleClick = (idx) => setProgressions({ ...selectedProgressions, [eid]: idx });
  const isActive = (i) => i === pid;
  const className = (i) => `${classes.card} ${isActive(i) ? classes.active : ""}`;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Edit exercise progression
      </Typography>
      {exercises.map((ex, i) => (
        <Card className={className(i)}>
          <CardActionArea className={classes.action} onClick={() => handleClick(i)}>
            <Typography variant="h6" component="p">
              {getExerciseVariation(ex)}
            </Typography>
            <Typography color="textSecondary" component="p">
              {getSetRepStr(ex)}
            </Typography>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
