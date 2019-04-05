import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

function MySvgIcon(props) {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <SvgIcon className={classes.icon} >
        {children}
      </SvgIcon>
    </div>
  );
}

MySvgIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySvgIcon);