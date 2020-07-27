import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LineStyleIcon from '@material-ui/icons/LineStyle';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "black", color: "white"}}>
        <Toolbar>
            <Link to="/" style={{textDecoration: 'none', color: "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Link to="/" style={{textDecoration: "none", color: "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LineStyleIcon />
          </IconButton>
          </Link>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Essentialism
          </Typography>
          <Link to="/login" style={{textDecoration: 'none', color: "white"}}>
          <Button color="inherit">Login</Button>
          </Link>
          <Link to="/dashboard" style={{textDecoration: "none", color: "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AccountCircleIcon />
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}