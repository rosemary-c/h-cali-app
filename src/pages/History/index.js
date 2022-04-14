import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppContext from "context/appContext";
import { progressions } from "data";

const PROGRESSION_ID_REGEX = /(\d)+$/;
const EXERCISE_NAME_REGEX = /^[a-z]+(_[a-z]+)?/;

const getProgressionName = (eid, pid) => {
  try {
    return progressions[eid][pid].name;
  } catch {
    return `${eid} ${pid}`;
  }
};

export default function WorkoutHistoryPage() {
  const { workoutHistory } = useContext(AppContext);
  const workoutNameKeys = Object.keys(workoutHistory).sort();

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Workout History
      </Typography>
      {workoutNameKeys.map((key) => {
        const eid = key.match(EXERCISE_NAME_REGEX)[0];
        const pid = key.match(PROGRESSION_ID_REGEX)[0];
        const logData = workoutHistory[key];
        return (
          <Box sx={{ marginTop: 16 }} key={key}>
            <Card>
              <CardContent>
                <Typography component='p' variant='h6' style={{ whiteSpace: 'pre' }}>
                  {getProgressionName(eid, pid)}
                </Typography>
                {logData.map((log) => {
                  const date = new Date(log.date);
                  return (
                    <Box sx={{ p: 1 }} key={log.date}>
                      <Typography color='textSecondary' component='p'>
                        {date.toDateString().replace(/^\w*\s/, '')}
                      </Typography>
                      <Box sx={{ paddingLeft: 16 }}>
                        <Typography color='textSecondary' component='p'>
                          {`Sets - ${JSON.stringify(log.sets).replaceAll(',', ' | ')}`}
                        </Typography>
                        <Typography color='textSecondary' component='p'>
                          {`Notes - ${log.notes}`}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </div>
  );
}
