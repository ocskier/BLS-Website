import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from "classnames";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MySvgIcon from '../Svg';


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
                            <ListItemIcon>
                                <MySvgIcon>
                                    <path fill="#000000" d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z" />
                                </MySvgIcon>
                            </ListItemIcon>
                            <Typography>
                                <Link to="/ourstory">Our Story</Link>
                            </Typography>
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
