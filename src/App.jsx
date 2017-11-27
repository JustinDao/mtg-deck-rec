import React, { Component } from 'react';

import './App.css';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';

import SideNav from './SideNav';
import SideList from './SideList';
import MTGCard from './MTGCard';
import Header from './Header';
import Constants from './Constants';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: Constants.DrawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    marginTop: 64,
    [theme.breakpoints.up('sm')]: {
      
    },
  },
  list: {
    background: theme.palette.background.paper,
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <SideNav />

        <main className={classes.content}>
          <Typography type="body1">
            <MTGCard />
          </Typography>
        </main>
      </div>      
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);