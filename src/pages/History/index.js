import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppContext from "context/appContext";
import { progressions } from "data";

export default function WorkoutHistoryPage() {
  const { workoutHistory } = useContext(AppContext);
  const workoutNameKeys = Object.keys(workoutHistory);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Workout History
      </Typography>
      {workoutNameKeys.map((key) => {
        const [eid, pid] = key.split("-");
        const logData = workoutHistory[key];
        const progressionName = progressions[eid][pid].name;
        return (
          <Box sx={{ marginTop: 16 }} key={key}>
            <Card>
              <CardContent>
                <Typography component="p" style={{ whiteSpace: "pre" }}>
                  {progressionName}
                </Typography>
                {logData.map((log) => {
                  return (
                    <Box sx={{ p: 1 }} key={log.date}>
                      <Typography color="textSecondary" component="p">
                        {new Date(log.date).toLocaleString()}
                      </Typography>
                      <Box sx={{ paddingLeft: 16 }}>
                        <Typography color="textSecondary" component="p">
                          {`Sets - ${JSON.stringify(log.sets)}`}
                        </Typography>
                        <Typography color="textSecondary" component="p">
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
