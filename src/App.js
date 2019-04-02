import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Footer,Parallax} from 'react-materialize';
import Home from './Pages/Home';


// import Jumbotron from "./components/Header";
// import Footer from "./components/Footer";
// import FriendCard from "./components/FriendCard";
// import StillCard from "./components/StillCard";
import Avatar from './components/Avatar';
import Nav from "./components/Nav";
import Main from "./components/Main";
// import Title from "./components/Title";

import "./App.css";
import PageTabs from "./components/PageTabs";

// $(document).ready(function(){
//     $('.collapsible').collapsible();
//   });

class App extends Component {
 
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Router>
        <div>
          <Nav>BrightLeaf Stables</Nav>
          <PageTabs />
              <Main>
                <Parallax imageSrc="ezgif.com-crop.gif"/>
                {/* <video autoplay loop id="bgvid">
                    <source src="Horse.mp4" type="video/mp4"></source>
                </video> */}
                <div className="section white">
                  <div className="row container">
                    <h3 className="widget-title">Brightleaf Stables</h3>
                    <p className="grey-text text-darken-3 darken-3">Horse farm and riding stables located in North Carolina’s premier Research Triangle Park.  Just a hoof beat away from Durham/Raleigh and surrounding areas.  Situated on acres of protected land plentiful in trails.  For driving directions</p>
                  </div>
                </div>
                {/* <Parallax imageSrc="ezgif.com-crop.gif" /> */}
                <Parallax imageSrc="http://brightleafstables.com/wp-content/uploads/2016/06/pic-1024x768.jpg"/>
                <div className="section white">
                  <div className="row container">
                    <Switch>
                      <Route exact path ="/" component={Home} />
                    </Switch>
                  </div>
                </div>
              </Main>
          <Footer>
              <Avatar>
                  <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                    <path fill="white" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                  </svg>
              </Avatar>
          </Footer>
      </div>
     </Router>
    );
  }
}

export default App;
