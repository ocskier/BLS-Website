import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// import Card from '../../components/Card';

const style = {
    root: {
        width: "80%",
    }
}

class Staff extends React.Component {
    
    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <h3 style={{textAlign:'center'}}>Staff</h3>
                <img src="https://i2.wp.com/brightleafstables.com/wp-content/uploads/2016/06/unnamed-2.jpg?w=1280" alt="our staff"></img>
                <h5 style={{textAlign:'center'}}>Heather Holder: Owner-Operator  ----  Steven Holder: Owner-Operator</h5>
                <h3 style={{textAlign:'center'}}>More Coming Soon</h3>
            </div>
        )
    }
}

Staff.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Staff);