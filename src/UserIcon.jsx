import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import blue from 'material-ui/colors/blue';

const styles = {
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: blue[500],
    cursor: 'pointer',
  },
};

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Avatar className={classes.avatar}>JD</Avatar>    
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);