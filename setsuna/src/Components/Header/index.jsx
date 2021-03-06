import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Setsuna</Button>
            <Router>
                <NavLink to="Column">コラム</NavLink>,
                <NavLink to="Feedback">フィードバック</NavLink>,
                <NavLink to="Match">マッチ</NavLink>,
                <NavLink to="Mypage">マイページ</NavLink>,
                <NavLink to="Result">結果</NavLink>,
            </Router>
        <IconButton>
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      
    </React.Fragment>
  );
}