import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {Footer,Parallax} from 'react-materialize';
import Map from './components/Map';
import Home from './Pages/Home';
import About from './Pages/About';
import Staff from './Pages/Staff';

import Avatars from './components/Avatars';
import Nav from "./components/Nav";
import Main from "./components/Main";
// import Title from "./components/Title";

import "./App.css";
import PageTabs from "./components/PageTabs";
import MyCarousel from './components/Carousel';

import ReactPlayer from 'react-player';


class App extends Component {
  
  state = {
    open: false
  };

  openCarousel = () => {
      this.setState({open:true});
  } 

  closeCarousel = () => {
      this.setState({open:false});
  } 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    
    return (
      <Router>
        <div>
          <Nav>BrightLeaf Stables</Nav>
          <PageTabs clickOpen={this.openCarousel} />
          <Main>
            {/* <Parallax imageSrc="ezgif.com-optimize.gif"/> */}
            {/* <div className="section white" style={{padding:0}}>
              <div className="row container" style={{width:'100%'}}>
                <video autoPlay loop={true} id="bgvid">
                  <source src="ezgif.com-resize.mp4" type="video/mp4"></source>
                </video>
              </div>
            </div> */}
            <div className='player-wrapper'>
              <ReactPlayer 
                url='Horse-1.mp4' 
                width='100%'
                height='100%'
                muted={true}
                playing 
                loop={true}
              />
            </div>
            <div className="section white">
              <div className="row container">
                <h3 className="widget-title">Brightleaf Stables</h3>
                <p className="grey-text text-darken-3 darken-3">Horse farm and riding stables located in North Carolina’s premier Research Triangle Park.  Just a hoof beat away from Durham/Raleigh and surrounding areas.  Situated on acres of protected land plentiful in trails.  For driving directions</p>
              </div>
            </div>
            <Parallax imageSrc="http://brightleafstables.com/wp-content/uploads/2016/06/pic-1024x768.jpg"/>
            <div className="section white">
              <div className="row container">
                <Switch>
                  <Route exact path ="/" component={Home} />
                  <Route exact path ="/ourstory" component={About} />
                  <Route exact path ="/staff" component={Staff} />
                  {/* <Route exact path ="/horses" component={Horses} /> */}
                </Switch>
              </div>
            </div>
            <Parallax imageSrc="http://brightleafstables.com/wp-content/uploads/2016/06/pic-1024x768.jpg"/>
            <div className="section white">
              <div className="row container">
                <Map />
              </div>
            </div>
          </Main>
          <Footer moreLinks={<Avatars />}>
          </Footer>
          {this.state.open ? 
            <MyCarousel 
              open={this.state.open} 
              close={this.closeCarousel} />  : 
              null}
        </div>
     </Router>
    );
  }
}

export default App;
