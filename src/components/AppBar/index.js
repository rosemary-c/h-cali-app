import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
}));

function HeaderBar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [rid, setRoutineId] = React.useState('hamptons');

  React.useEffect(() => {
    const newId = location.pathname.split('/')[2];
    setRoutineId(newId);
  }, [location.pathname]);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Button className={classes.title} onClick={() => history.push(`/routines/${rid}`)}>
          <Typography variant="h6">
            Hybrid Calisthenics
          </Typography>
        </Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
