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

class About extends React.Component {
    
    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <h3 style={{textAlign:'center'}}>About Us</h3>
                <img className={classes.image} src="https://i0.wp.com/brightleafstables.com/wp-content/uploads/2016/06/532290_268654476590774_856782682_n.jpg?w=640" alt="our family"></img>
                <p style={{fontSize:'1.8rem',lineHeight:'3.0rem'}}>In March 1999 Steven and Heather purchased the land that now is called Brightleaf Stables.  Steven and Heather 
                started immediately renovating the farm house on the property.  On October 9th 1999 Steven and Heather were married.  All 
                of the surrounding land was farmed by Steven and family for tobacco for many years.  They spent many days under the trees 
                for shade on breaks while farming.  Mrs. Oakley who owned the farm would bring out water and lemonade to all the hard workers.  
                Mr. Oakley used the same trees that were taken down to clear land over 100 years ago to build a farm house and surrounding barns.  
                Mr. Oakley built it all with his own two hands.  They raised 4 children and they farmed all of his life.</p>
                <p style={{fontSize:'1.8rem',lineHeight:'3.0rem'}}>In the Spring 2000 Brightleaf Stables became a home to horses.  It all started when a man by the name of Quency Hawkins came to 
                Holder & Sons shop inquiring about who owned the open land on Sherron Road.  Quency had 3 horses at the time, and he wanted to 
                lease the land for them.  Quency was persistent and Steven agreed to lease a pasture for his horses Buck, Showdown and Belle.  
                Steven decided he would buy a horse too, and he purchased Princess a flashy paint barrel mare who soon become the heart of the farm.  
                Steven would hack out with Princess and explore the trails with Quency.  Steven and Quency quickly became daily riding buddies.</p>
                <p style={{fontSize:'1.8rem',lineHeight:'3.0rem'}}>That same winter Steven started rebuilding the old mule barn that is on the property and quickly built up 6 sturdy stalls.  
                Brightleaf started growing.  We began boarding horses in the Spring of 2001 and have continued to add and remodeled every year.  
                Our latest addition of 3 new stalls was completed in January of 2016.</p><p style={{fontSize:'1.8rem',lineHeight:'3.0rem'}}>We now have a cozy 13 stall barn that includes a feed 
                and tack room.  Quency is still very much involved with Brightleaf Stables even though he has branched out and bought his own 
                farm.  We still get a good “spin” in when he trailers over to the farm and he knows all the trails just as well as Steven and Heather do.</p>
                <p style={{fontSize:'1.8rem',lineHeight:'3.0rem'}}>Looking back over the years we have surely come a long way to be the Brightleaf Stables we all know and love today.  We have had 
                many wonderful people and animals come through our farm and each and every one of those souls have a special place in Brightleaf’s 
                history and heart.  We look forward to what the future brings us and would love for you to be a part of it!</p><p style={{fontSize:'1.8rem',lineHeight:'3.0rem'}}>Come as you are, and 
                leave  as a friend.</p><p style={{fontSize:'1.8rem',lineHeight:'3.0rem'}}>See ya on the farm!</p>
            </div>
        )
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(About);
