import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useLocation } from 'react-router-dom';
import LocalStorageContext from "context/storageContext";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "white",
    textTransform: "capitalize",
  },
  appName: {
    lineHeight: "inherit",
  },
  resetButton: {
    margin: "6px 0",
  },
  modal: {
    margin: "25% 20%",
    width: "fit-content"
  },
  actions: {
    margin: theme.spacing(1),
    marginTop: 0
  },
  grid: {
    maxWidth: '800px',
    margin: 'auto',
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [rid, setRoutineId] = React.useState("hamptons");
  const [hideReset, setHideReset] = React.useState(false);
  const [showExerciseName, setShowExercise] = React.useState(false);
  const [showModal, setModal] = React.useState(false);
  const eid = location.pathname.split("/").pop();

  const { resetStorage } = useContext(LocalStorageContext);

  React.useEffect(() => {
    const newRid = location.pathname.split("/")[2];
    setRoutineId(newRid);

    setHideReset(location.pathname.includes("/workouts"));
    setShowExercise(location.pathname.includes("/exercises/"));
  }, [location.pathname]);
  
  const handleReset = () => {
    resetStorage();
    setModal(false);
  };

  const handleBackToWorkout = () => {
    const path = location.pathname.split("/").slice(0, -1).join("/");
    history.push(path);
  };;

  return (
    <AppBar position="relative">
      <Toolbar>
        <Grid container className={classes.grid}>
          <Grid item xs={2}>
            {showExerciseName ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleBackToWorkout}
              >
                <ArrowBackIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={8} align="center">
            <Button className={classes.title} onClick={() => history.push(`/routines/${rid}`)}>
              <Typography variant="h6" className={classes.appName}>
                {showExerciseName ? eid.replace("_", " ") : "H. Calisthenics"}
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={2} align="right">
            {!hideReset && (
              <Button
                color="inherit"
                onClick={() => setModal(true)}
                className={classes.resetButton}
              >
                Reset
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
      <Modal open={showModal} onClose={() => setModal(false)}>
        <Card className={classes.modal}>
          <CardContent>
            <Typography>
              Are you sure you want to reset your progress and clear your workout history?
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Grid container spacing={1}>
              <Grid item xs={6} align="center">
                <Button
                  onClick={handleReset}
                  color="primary"
                  size="medium"
                  variant="outlined"
                  fullWidth={true}
                >
                  Yes
                </Button>
              </Grid>
              <Grid item xs={6} align="center">
                <Button
                  onClick={() => setModal(false)}
                  color="primary"
                  size="medium"
                  variant="outlined"
                  fullWidth={true}
                >
                  No
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Modal>
    </AppBar>
  );
}
