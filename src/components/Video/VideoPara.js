import React from "react";

import ReactPlayer from 'react-player';

import "../../../node_modules/video-react/dist/video-react.css"; // import css
import './VideoPara.css';

class VideoPara extends React.Component {
    
    render () {
        return (
            <div>
                <div className='player-wrapper'>
                    <ReactPlayer 
                        url='Horse-1.mp4' 
                        width='100%'
                        height='100%'
                        muted={true}
                        playing={true}
                        loop={true}
                    />
                </div>
                <div className="section white">
                    <div className="row container">
                        <h3 className="widget-title">Brightleaf Stables</h3>
                        <p className="grey-text text-darken-3 darken-3">Horse farm and riding stables located in North Carolina’s premier Research Triangle Park.  Just a hoof beat away from Durham/Raleigh and surrounding areas.  Situated on acres of protected land plentiful in trails.  For driving directions</p>
                    </div>
                </div>
            </div>
        )
    }   
}

export default VideoPara;