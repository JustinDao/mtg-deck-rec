import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';
import classnames from 'classnames';

import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  card: {
    maxWidth: 255,
  },
  media: {
    "min-height": 361,
    "background-size": "contain",
  },
  actions: {
    height: 20,
    "justify-content": "center",
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  hidden: {
    "display": "none"
  },
});

class MTGCard extends Component {
  state = { 
    expanded: false,
    showInfoButton: true,
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/cryptic_command.jpg"
          title="Cryptic Command"
        />
        <CardActions className={
          classnames(
            classes.actions,
            {
              [classes.hidden]: !this.state.showInfoButton,
            }
          )
        }>
          <IconButton
            className={
              classnames(
                classes.expand,
                {
                  [classes.expandOpen]: this.state.expanded,
                }
              )
            }
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more" >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
          <CardContent>
            <Typography type="headline" component="h2">
              Cryptic Command
            </Typography>
            <Typography type="caption" component="h2">
              IMA
            </Typography>
            <Typography component="div">
              <span>Choose two -</span>
              <ul>
                <li>Counter target spell.</li>
                <li>Return target permanent to its owner's hand.</li>
                <li>Tap all creatures your opponents control.</li>
                <li>Draw a card.</li>
              </ul>
            </Typography>
          </CardContent>
        </Collapse>          
      </Card>
    );
  }
}

MTGCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MTGCard);