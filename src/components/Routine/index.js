import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Progression from 'components/ProgressionRow';

const useStyles = makeStyles((theme) => ({
  table: {
    margin: `16px 0`,
    padding: theme.spacing(2),
    borderLeft: ({ isActive }) => isActive ? `4px solid ${theme.palette.primary.main}` : 'none',
  },
}));

export default function RoutineTable({ workouts, idx = 0, isActive }) {
  const classes = useStyles({ isActive });

  return (
    <Paper className={classes.table}>
      <Typography variant="h5" gutterBottom>{`Workout ${idx + 1}`}</Typography>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {workouts.map((workout) => <Progression workout={workout} />)}
        </TableBody>
      </Table>
    </Paper>
  );
}
