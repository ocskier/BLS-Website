import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// import Card from '../../components/Card';

const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto'
    },
    image: {
        backgroundPosition:'50%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'auto',
        width:'100%',
        maxHeight: '476px'
    }
}

class Staff extends React.Component {
    
    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <h3 style={{textAlign:'center'}}>Staff</h3>
                <img className={classes.image} src="https://i2.wp.com/brightleafstables.com/wp-content/uploads/2016/06/unnamed-2.jpg?w=1280" alt="our staff"></img>
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