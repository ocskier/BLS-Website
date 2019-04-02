import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import lightblue from '@material-ui/core/colors/lightBlue';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  blueAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    color: '#fff',
    backgroundColor: lightblue[500],
  },
};

function IconAvatars(props) {
  const { classes,children } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.blueAvatar}>
        {children}
      </Avatar>
    </Grid>
  );
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);