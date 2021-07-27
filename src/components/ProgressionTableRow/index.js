import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { progressions } from 'data';
import { getExerciseVariation, getSetRepStr } from 'utils/helper';
import { useSessionStorage } from 'hooks/useSessionStorage';

function ProgressionRow({ eid }) {
  const { selectedProgressions } = useSessionStorage();
  const pid = selectedProgressions[eid] ?? 0;
  const exercise = progressions[eid][pid];

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
