import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import HistoryIcon from "@material-ui/icons/History";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useLocation } from 'react-router-dom';
import AppContext from "context/appContext";
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
    margin: "20% auto",
    padding: "8px",
    width: "50%"
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
  const [showExerciseName, setShowExercise] = React.useState(false);
  const [showModal, setModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { resetStorage, routineId } = useContext(AppContext);

  React.useEffect(() => {
    setShowExercise(location.pathname.includes("/exercises/"));
  }, [location.pathname]);
  
  const handleBackToWorkout = () => {
    const path = location.pathname.split("/").slice(0, -1).join("/");
    history.push(path);
  };
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleGoToHistory = () => {
    handleMenuClose();
    history.push(`/routines/${routineId}/history`);
  };

  const handleReset = () => {
    resetStorage();
    handleMenuClose();
    setModal(false);
    history.push(`/routines/${routineId}`);
  };

  const eid = location.pathname.split("/").pop();

  return (
    <AppBar position='relative'>
      <Toolbar>
        <Grid container className={classes.grid}>
          <Grid item xs={2}>
            {showExerciseName ? (
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={handleBackToWorkout}
              >
                <ArrowBackIcon />
              </IconButton>
            ) : (
              <div>
                <IconButton
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleMenuClose}>
                  <MenuItem
                    onClick={() =>
                      window.open('https://www.hybridcalisthenics.com/routine', '_blank')
                    }
                  >
                    <ListItemIcon style={{ minWidth: 'unset', paddingRight: 8 }}>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText>About Hybrid Calisthenics</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleGoToHistory}>
                    <ListItemIcon style={{ minWidth: 'unset', paddingRight: 8 }}>
                      <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText>View Workout History</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => setModal(true)}>
                    <ListItemIcon style={{ minWidth: 'unset', paddingRight: 8 }}>
                      <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText>Reset Progressions</ListItemText>
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Grid>
          <Grid item xs={8} align='center'>
            <Button
              className={classes.title}
              onClick={() => history.push(`/routines/${routineId}`)}
            >
              <Typography variant='h6' className={classes.appName}>
                {showExerciseName ? eid.replace('_', ' ') : 'H. Calisthenics'}
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={2} align='right'>
            {/*
              <Button
                color='inherit'
                onClick={() => setModal(true)}
                className={classes.resetButton}
              >
                Reset
              </Button>
            */}
          </Grid>
        </Grid>
      </Toolbar>
      <Modal open={showModal} onClose={() => setModal(false)}>
        <Card className={classes.modal}>
          <CardContent>
            <Typography variant="h6">
              Are you sure you want to reset your progress and clear your workout history?
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Grid container spacing={1}>
              <Grid item xs={6} align='center'>
                <Button
                  onClick={handleReset}
                  color='primary'
                  size='medium'
                  variant='outlined'
                  fullWidth={true}
                >
                  Yes
                </Button>
              </Grid>
              <Grid item xs={6} align='center'>
                <Button
                  onClick={() => setModal(false)}
                  color='primary'
                  size='medium'
                  variant='outlined'
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
