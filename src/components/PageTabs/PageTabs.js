import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from "classnames";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './PageTabs.css';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'aliceblue',
    minHeight: '50px',
    boxShadow: 'none',
  },
  content: {
    padding: '0 24px 0 24px',
    '& div' :   {
        margin: '0 !important',
        justifyContent: "center"
    }
  },
  panel: {
    zIndex: '1',
    width: '10%',
    position: 'absolute',
    margin: 0,
    backgroundColor: 'aliceblue',
    borderTopLeftRadius: '0 !important',
    borderTopRightRadius: '0 !important',
    borderBottomLeftRadius: '0 !important',
    borderBottomRightRadius: '0 !important',
    boxShadow: 'none',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    paddingRight: '0 !important',
  },
  details: {
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    padding: 0,
  },
  links: {
      fontSize: '0.8rem'
  },
});

class IconLabelTabs extends React.Component {

  render() {
    const { classes, clickOpen } = this.props;

    return (
      <Paper square className={classes.root}>
          <ExpansionPanel  className={classNames(classes.panel,"panel-About")}>
            <ExpansionPanelSummary className={classes.content}>
                <Typography className={classes.heading}>About</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.root}>
                    <List>
                        <ListItem button>
                            <Typography>
                                <Link to="/ourstory">Our Story</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="/staff">Brightleaf Staff</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button onClick={()=> clickOpen()}>
                            <Typography>
                                <Link to="/">Brightleaf Horses</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/photo-gallery/">Photo Gallery</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/blog/">Blog</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/testimonial/">Testimonials</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                    </List>
                </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel  className={classNames(classes.panel,"panel-Services")}>
            <ExpansionPanelSummary className={classes.content}>
                <Typography className={classes.heading}>Services</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.root}>
                    <List>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/camps/">Camps</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/boarding/">Boarding</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/lessons/">Lesson Programs</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/parties-ponies/">Parties &amp; Ponies</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/trail-rides/">Trail Rides</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/gift-certificates/">Gift Certificates</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                    </List>
                </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel  className={classNames(classes.panel,'panel-Events')}>
            <ExpansionPanelSummary className={classes.content}>
                <Typography className={classes.heading}>Events</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.root}>
                    <List>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/events/">Events Calendar</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                        <ListItem button>
                            <Typography>
                                <Link to="http://brightleafstables.com/camps/">Horse Camp</Link>
                            </Typography>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        </ListItem>
                    </List>
                </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel  className={classNames(classes.panel,'panel-Contact')}>
            <ExpansionPanelSummary className={classes.content}>
                <Typography className={classes.heading}>Contact</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.root}>  
                    <List>
                        <ListItem button>
                            <Typography>
                                <a href="http://brightleafstables.com/contact/" aria-current="page">Contact</a>
                            </Typography>
                        </ListItem>
                    </List>
                </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      </Paper>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelTabs);
