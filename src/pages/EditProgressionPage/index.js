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
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

export default function EditExerciseProgressionPage({ pid = 0 }) {
  const { eid } = useParams();
  const classes = useStyles();
  const [progressionId, setProgression] = React.useState(pid);
  const exercises = progressions[eid];

  const handleClick = (idx) => setProgression(idx);
  const isActive = i => i === progressionId;
  const className = i => `${classes.card} ${isActive(i) ? classes.active : ''}`;

  return exercises.map((ex, i) => (
    <Card className={className(i)} variant="outlined">
      <CardActionArea className={classes.action} onClick={() => handleClick(i)}>
        <Typography variant="h5" color={isActive(i) ? 'white' : ''} component="p">
          {getExerciseVariation(ex)}
        </Typography>
        <Typography variant="h6" color={isActive(i) ? 'white' : 'textSecondary'} component="p">
          {getSetRepStr(ex)}
        </Typography>
      </CardActionArea>
    </Card>
  ));
}
