import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';

import SideList from './SideList';
import Constants from './Constants';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: Constants.DrawerWidth,
  },
});

class SideNav extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer
        type="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <SideList />
      </Drawer>   
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNav);