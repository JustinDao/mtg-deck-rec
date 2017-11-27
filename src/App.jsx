import React, { Component } from 'react';

import './App.css';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Header from './Header';
import SideNav from './SideNav';
import MTGCard from './MTGCard';

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
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    marginTop: 64,
    [theme.breakpoints.up('sm')]: {
      
    },
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <SideNav />

        <main className={classes.content}>
          <MTGCard />          
        </main>
      </div>      
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);