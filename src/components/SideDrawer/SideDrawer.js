import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import MySvgIcon from '../Svg';

const styles = {
  list: {
    width: 210,
  },
};

class TemporaryDrawer extends React.Component {

  render() {
    const { classes, open, clickHandler, toggle } = this.props;

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    // const iOS = false;

    const sideList = (
      <div className={classes.list}>
        <List>
            <ListItem button>
                <ListItemIcon>
                    <MySvgIcon>
                        <path fill="#000000" d="M9,19V13H11L13,13H15V19H18V10.91L12,4.91L6,10.91V19H9M12,2.09L21.91,12H20V21H13V15H11V21H4V12H2.09L12,2.09Z" />
                    </MySvgIcon>
                </ListItemIcon>
                <Typography>
                    <Link to="/">Home</Link>
                </Typography>
            </ListItem>
            <Divider />
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
                <ListItemIcon>
                    <MySvgIcon>
                        <path fill="#000000" d="M12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6M6,8.17A2.5,2.5 0 0,0 3.5,10.67A2.5,2.5 0 0,0 6,13.17C6.88,13.17 7.65,12.71 8.09,12.03C7.42,11.18 7,10.15 7,9C7,8.8 7,8.6 7.04,8.4C6.72,8.25 6.37,8.17 6,8.17M18,8.17C17.63,8.17 17.28,8.25 16.96,8.4C17,8.6 17,8.8 17,9C17,10.15 16.58,11.18 15.91,12.03C16.35,12.71 17.12,13.17 18,13.17A2.5,2.5 0 0,0 20.5,10.67A2.5,2.5 0 0,0 18,8.17M12,14C10,14 6,15 6,17V19H18V17C18,15 14,14 12,14M4.67,14.97C3,15.26 1,16.04 1,17.33V19H4V17C4,16.22 4.29,15.53 4.67,14.97M19.33,14.97C19.71,15.53 20,16.22 20,17V19H23V17.33C23,16.04 21,15.26 19.33,14.97Z" />
                    </MySvgIcon>
                </ListItemIcon>
                <Typography>
                    <Link to="/staff">Brightleaf Staff</Link>
                </Typography>
            </ListItem>
            <ListItem button onClick={clickHandler}>
                <ListItemIcon>
                    <MySvgIcon>
                        <path fill="#000000" d="M19,22H5V20H19V22M13,2V2C11.75,2 10.58,2.62 9.89,3.66L7,8L9,10L11.06,8.63C11.5,8.32 12.14,8.44 12.45,8.9C12.47,8.93 12.5,8.96 12.5,9V9C12.8,9.59 12.69,10.3 12.22,10.77L7.42,15.57C6.87,16.13 6.87,17.03 7.43,17.58C7.69,17.84 8.05,18 8.42,18H17V6A4,4 0 0,0 13,2Z" />
                    </MySvgIcon>
                </ListItemIcon>
                <Typography>
                    <Link to="/">Brightleaf Horses</Link>
                </Typography>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MySvgIcon>
                        <path fill="#000000" d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6" />
                    </MySvgIcon>
                </ListItemIcon>
                <Typography>
                    <Link to="http://brightleafstables.com/photo-gallery/">Photo Gallery</Link>
                </Typography>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MySvgIcon>
                        <path fill="#000000" d="M14,13H9.95A1,1 0 0,0 8.95,14A1,1 0 0,0 9.95,15H14A1,1 0 0,0 15,14A1,1 0 0,0 14,13M9.95,10H12.55A1,1 0 0,0 13.55,9A1,1 0 0,0 12.55,8H9.95A1,1 0 0,0 8.95,9A1,1 0 0,0 9.95,10M16,9V10A1,1 0 0,0 17,11A1,1 0 0,1 18,12V15A3,3 0 0,1 15,18H9A3,3 0 0,1 6,15V8A3,3 0 0,1 9,5H13A3,3 0 0,1 16,8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                    </MySvgIcon>
                </ListItemIcon>
                <Typography>
                    <Link to="http://brightleafstables.com/blog/">Blog</Link>
                </Typography>
            </ListItem>
            <ListItem button>   
                <ListItemIcon>
                    <MySvgIcon>
                        <path fill="#000000" d="M18,14H10.5L12.5,12H18M6,14V11.5L12.88,4.64C13.07,4.45 13.39,4.45 13.59,4.64L15.35,6.41C15.55,6.61 15.55,6.92 15.35,7.12L8.47,14M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
                    </MySvgIcon>
                </ListItemIcon>
                <Typography>
                    <Link to="http://brightleafstables.com/testimonial/">Testimonials</Link>
                </Typography>
            </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        {iOS ? 
        <SwipeableDrawer 
            open={open} 
            onOpen={toggle('left', true)}
            onClose={toggle('left', false)}
            disableBackdropTransition={!iOS} 
            disableDiscovery={iOS}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={toggle('left', false)}
            onKeyDown={toggle('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer> :
        <Drawer 
            transitionDuration={{enter:2000,exit:2000}}
            elevation={20}
            open={open} 
            onClose={toggle('left', false)}
        >
            <div
                tabIndex={0}
                role="button"
                onClick={toggle('left', false)}
                onKeyDown={toggle('left', false)}
            >
                {sideList}
            </div>
        </Drawer>
        }
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);