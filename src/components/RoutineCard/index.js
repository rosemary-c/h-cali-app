import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ProgressionRow from 'components/ProgressionTableRow';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  action: {
    padding: theme.spacing(2),
    borderLeft: ({ isActive }) => isActive ? `4px solid ${theme.palette.primary.main}` : 'none',
  },
  card: {
    margin: `16px 0`,
  },
}));

export default function RoutineTable({ workouts: exercises, wid = 0, isActive, selectedProgressions }) {
  const classes = useStyles({ isActive });
  const history = useHistory();

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.action}
        onClick={() => history.push(`${window.location.pathname}/workouts/${wid}/exercises`)}
      >
        <Typography variant="h5" gutterBottom>{`Workout ${String.fromCharCode(
          65 + wid
        )}`}</Typography>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {exercises.map((eid) => (
              <ProgressionRow eid={eid} selectedProgressions={selectedProgressions} />
            ))}
          </TableBody>
        </Table>
      </CardActionArea>
    </Card>
  );
}
