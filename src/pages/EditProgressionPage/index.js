import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useParams } from "react-router-dom";
import { progressions } from 'data';
import { getExerciseVariation, getSetRepStr } from 'utils/helper';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import AppContext from "context/appContext";

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

export default function EditExerciseProgressionPage() {
  const { selectedProgressions, setProgressions } = useContext(AppContext);
  const { eid } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const exercises = progressions[eid];
  const pid = parseInt(selectedProgressions[eid]) || 0;

  const handleClick = (idx) => {
    setProgressions({ ...selectedProgressions, [eid]: idx });
    document.getElementsByClassName("route-wrapper")[0].scrollTo(0, 0);
    history.push(window.location.pathname.replace(`/${eid}`, ""));
  };
  const isActive = (i) => i === pid;
  const className = (i) => `${classes.card} ${isActive(i) ? classes.active : ""}`;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Edit exercise progression
      </Typography>
      {exercises.map((ex, i) => (
        <Card key={i} className={className(i)}>
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
