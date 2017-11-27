import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

class SideList extends Component {
  state = {
    redirect: false,
  }

  linkTo(route: string) {
    console.log("CLICK!");

    this.state = 
    {
      redirect: true,
      path: route,
    };
    
  }

  render() {
    const { classes } = this.props;

    if (this.state.redirect) {
      return <BrowserRouter><Redirect push to={this.state.path} /></BrowserRouter>;
    }

    return (
      <div className={classes.root}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Cards" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Decks" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
      </div>
    );
  }
}

SideList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideList);