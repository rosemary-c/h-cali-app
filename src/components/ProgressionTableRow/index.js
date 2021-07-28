import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { progressions } from 'data';
import { getExerciseVariation, getSetRepStr } from 'utils/helper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  set: {
    minWidth: "45px",
  },
}));

function ProgressionRow({ eid, selectedProgressions }) {
  const classes = useStyles();
  const pid = selectedProgressions[eid] ?? 0;
  const exercise = progressions[eid][pid];

  return (
    <TableRow key={exercise.name}>
      <TableCell>
        <Typography>{getExerciseVariation(exercise)}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography color="textSecondary" className={classes.set}>
          {getSetRepStr(exercise)}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

export default ProgressionRow;
