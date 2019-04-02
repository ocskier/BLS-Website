import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MyCarousel from '../../components/Carousel';
import Card from '../../components/Card';

const style = {
    root: {
        width: "80%",
    }
}

class Horses extends React.Component {

    render () {
        const {classes} = this.props;
        return (
            <div id="carousel" className={classes.root}>
                <MyCarousel />
            </div>
        )
    }
}

Horses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Horses);