import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { progressions } from 'data';
import { getExerciseVariation, getSetRepStr } from 'utils/helper';

function ProgressionRow({ eid }) {
  const [progressionIdx, setProgression] = React.useState(0);
  const exercise = progressions[eid][progressionIdx];

  return (
    <TableRow key={exercise.name}>
      <TableCell align="left">
        <Typography>{getExerciseVariation(exercise)}</Typography>
      </TableCell>
      <TableCell align="right" color="text.secondary">
        <Typography color="textSecondary">
          {getSetRepStr(exercise)}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

export default ProgressionRow;
