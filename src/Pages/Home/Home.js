import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '../../components/Card';

import './Home.css';

const style = {

}

class Home extends React.Component {
    
    render () {
        // const {classes} = this.props;
        return (
            <div style={{display:'flex'}}>
                <Card 
                    title='Trail Rides'
                    descrip='Not all who wonder are lost.  Take a journey on miles of scenic trails right in our backyard.  Explore the world around you on the back of a horse.'
                    image="http://brightleafstables.files.wordpress.com/2016/06/cropped-13177179_10100818610181037_8823607613937186676_n.jpg?ssl=1&amp;w=321"
                />
                <Card 
                    title='Fun for Kids'
                    descrip='Brightleaf fun for the little ones.  Because kids don’t remember their best day of watching TV.  Our horses are gentle teachers perfect for children of all ages.'
                    image="http://i2.wp.com/brightleafstables.files.wordpress.com/2016/06/12369247_333428910160697_8470201872324983739_n.jpg?ssl=1&amp;w=321"
                />
                <Card 
                    title='Yoga &amp; Horses'
                    descrip='Ground and connect with Mother Nature’s magical creatures.  Experience the equine elements of grace, power, spirit, and beauty.'
                    image="http://i0.wp.com/brightleafstables.files.wordpress.com/2016/06/blyoga.jpg?ssl=1&amp;w=321"
                />
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Home);