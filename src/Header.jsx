import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Constants from './Constants';

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import UserIcon from './UserIcon';

const styles = theme => ({
  header: {
    position: 'absolute',
    width: `calc(100% - ${Constants.DrawerWidth}px)`,
    marginLeft: Constants.DrawerWidth,
  },
  spacing: {
    flex: '1 1 auto',
  },
  usericon: {
    height: 'auto',
    width: 'auto',
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography type="title" color="inherit" noWrap>
            MTG Deck Rec
          </Typography>
          <div className={classes.spacing}></div>
          <IconButton color="inherit" className={classes.usericon}>
            <UserIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

  