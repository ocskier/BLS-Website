import React from 'react';
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

import './Carousel.css';
import withStyles from '@material-ui/core/styles/withStyles';

const SlideArr = [
    {
        image: 'https://i2.wp.com/brightleafstables.com/wp-content/uploads/2016/06/77b2f138-53b8-4e6c-82f2-d7a3d29323ae.jpg?fit=1516%2C1137',
        altName: 'Pic 1',
        title: 'Princess Heart of the Farm - Brightleaf Resident since 1999',
        body: 'Miss Jazz Harmony June 15, 1991 Black/Tobiano paint mare Sire-Real Jazz Dam-Impressing Jody out of Mississippi. &nbsp;Princess was purchased by Steven the year of 1999 to be his trail horse.  Princess came to the farm a retired barrel racer who was too sensitive to spurs/pressure on the flanks and too fast for beginner riders. Steven immediately fell in love with and loved riding her. She is beautiful, BIG and sweet. Her first name was Jazzy, but was changed by Steven and Heather’s son Chandler when he was 2 years of age. She has matured to be very gentle. She has taught both old and young confidence in riding and grooming. She enjoys being groomed and a good massage. She loves grazing in the shade on a summer day. Princess fully retired October 2014. Princess is trail boss and knows all the farm trails. She truly is the best horse ever born or to trot this planet. She is the and the heart of all that she comes in contact with.;'
    },
    {
        image: 'https://i1.wp.com/brightleafstables.com/wp-content/uploads/2016/06/12828477_356935681143353_414924801405440247_o.jpg?fit=1152%2C2048',
        altName: 'Pic 2',
        title: 'Willow “Snuggles” - Brightleaf Resident Since 2015',
        body: 'On 8/22/15 Heather said “I want her!” &nbsp;Beauty “Big Momma” came to the farm ready to foal. She was living at a farm that did not have the space&nbsp;for&nbsp;her to have her baby. Beauty is a shire. &nbsp;All of the barn friends and family were on foal watch around the clock when Beauty first set foot on the farm. Beauty gave birth at Brightleaf on&nbsp;September 5th at 2:22am. It was a cool night with the sky full of stars. Steven and Heather were present for the birth and it was nothing short of amazing! It was our first birth on the farm. The birth went better than textbook. She was imprinted and it shows! She is an absolute Gem and sweet as sugar. She is loved by all that come in contact with her. She still has a lot of growing to do! She loves eating carrots and apples. She has the barn name of “Snuggles” as she loves to cuddle.'
    },
    {
        image: 'https://i2.wp.com/brightleafstables.com/wp-content/uploads/2016/06/13516324_394465414057046_2859548695555038234_n.jpg?fit=445%2C480',
        altName: 'Pic 3',
        title: 'Prancer “Jack” -- Brightleaf Resident Since 2014',
        body: 'In June of 2014&nbsp;Steven answered an add on Craigslist for a miniature donkey. The donkey was owned by a 12 year old girl. Heather came home from work one day and Steven told her that he needed for her to go to Creedmoor, NC to pick up a donkey. Reluctantly, Heather went along for the ride. Steven fell in love with the donkey and of course wanted to bring it home. The family that owned Prancer was moving from the country to the city and no longer could keep him. The young girl was sad. Heather knew this would be work as Prancer was very spoiled and liked to kick and bite. Of course Prancer came to Brightleaf. Heather then started working with Prancer trying to do basic grooming and such and found out very quickly that Prancer was Jackie Chan! He loves to kick very high and bite low. He is full of personality to say the least. Steven has taught him to lay down and roll over. We now call him “Jack” among other names when he is naughty! His young previous owner still comes to visit. Jack enjoys cookies,chips and suckers. If no other sweets are available he will eat carrots. Most days you will find him grazing in the yard at the farm.'
    },
    {      
        image: 'https://i2.wp.com/brightleafstables.com/wp-content/uploads/2016/06/luna.jpg?fit=3024%2C4032',
        altName: 'Pic 4',
        title: 'Luna Diamond in the Sky -- Brightleaf Resident Since 2010',
        body: 'Luna is a beautiful Grulla quarter horse mare.  Grulla is her coat color, a unique and silvery tone with a single white star on her face, she is truly a diamond in the sky!   Luna became a Brightleaf resident in Septemberof 2010 and she quickly found her place in our hearts.  She is as sweet and patient as can be and will surely follow in Princess’s footsteps.  Luna is great on the trails with a little pep in her step, she is patient with her riders, and when asked to go she can turn a barrel like she was born to do it!  Sometimes you’ll hear Luna being referred to as “Chunk” that’s probably because she is one of the bulkiest horses we have, she is built like a western working horse with a thick chest, bulky hind quarters, and broad shoulders.  Don’t let her “Chunk” status fool you though, she is sweeter than honey.  We are happy to have Luna as part of the Brightleaf family and look forward to many more years.'
    },
    {
        image: 'https://i2.wp.com/brightleafstables.com/wp-content/uploads/2019/02/4838.jpg?fit=3024%2C4032',
        altName: 'Pic 3',
        title: '“Hunny” Desperado Sunshine -- Brightleaf Resident Since 2014',
        body: 'Hunny is a big beautiful Dun quarter horse that is as sweet as she is big! She was born on April 29, 2004 in Canton North Carolina. She is one of the many favorites on the farm. She is super gentle as this makes for a great lesson or trail ride. Most days you will find Hunny under the barn fan or in her stall eating hay and napping with the barn cat Vinny. Hunny’s favorite treats are carrots. She loves to be groomed and will give you a hug! She has more whoa than go! She is a great horse to learn how to trot and canter on.'
    }
]

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let mobileYes = false;

if (isMobile.any()) {
    mobileYes = true;
}

const CustomAutoRotatingCarousel = withStyles(() => ({
    content: {
        width: '90%',
        height: '85%',
        padding: '20px',
        margin: '0 auto',
        marginTop: '50px',
        maxWidth: '1056px'
    },
    carouselWrapper: {
        height: '85%',
        margin: '30px'
    }
}))(AutoRotatingCarousel)

const CustomSlide = withStyles(() => ({
    mediaMobile: {
        transform: 'none !important',
    }
}))(Slide)

class MyCarousel extends React.Component {

    render () {

        const { open, close } = this.props;

        return (
            <div style={{ position: 'relative', width: '100%', height: 500 }}>
                <CustomAutoRotatingCarousel
                    autoplay={false}
                    interval={6000}
                    mobile={mobileYes}
                    open={open}
                    onClose={() => close()}
                    // onStart={() => this.setState({ open: false })}
                    style={{ position: 'absolute' }}
                >
                    {SlideArr.map(n => {
                        return (
                            <CustomSlide
                                media={
                                <img 
                                    src={n.image} 
                                    alt={n.altName}
                                    style={{
                                        backgroundPosition:'50%',
                                        backgroundRepeat:'no-repeat',
                                        backgroundSize:'cover',
                                        height:'auto',
                                        width:'100%',
                                        maxHeight: '476px'}}
                                />}
                                mediaBackgroundStyle={{ backgroundColor: 'black' }}
                                style={{ backgroundColor: 'black', height: 'auto', paddingBottom: '60px'}}
                                title={n.title}
                                subtitle={n.body}
                            />
                        )
                    })}   
                </CustomAutoRotatingCarousel>
            </div>
        )
    }
}

export default MyCarousel;