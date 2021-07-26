import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { progressions } from 'data';

function Progression({ workout }) {
  const [progressionIdx, setProgression] = React.useState(0);
  const progression = progressions[workout][progressionIdx];
  const { name, setValue, repValue, variation, note } = progression;
  const variationText = variation && `(${variation}`;

  return (
    <TableRow key={name}>
      <TableCell align="left">
        <Typography>{`${name} ${variationText}`}</Typography>
      </TableCell>
      <TableCell align="right" color="text.secondary">
        <Typography color="textSecondary">
          {`${setValue} x ${repValue}`}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

export default Progression;
