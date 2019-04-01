import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Footer,Parallax} from 'react-materialize';


// import Jumbotron from "./components/Header";
// import Footer from "./components/Footer";
// import FriendCard from "./components/FriendCard";
// import StillCard from "./components/StillCard";
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
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                  </div>
                </div>
                {/* <Parallax imageSrc="ezgif.com-crop.gif" /> */}
                <Parallax imageSrc="http://brightleafstables.com/wp-content/uploads/2016/06/pic-1024x768.jpg"/>
                <Switch>
                  <Route exact path ="/" component={() => {return(<div></div>)}} />
                </Switch>
                <div className="section white">
                  <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                  </div>
                </div>
              </Main>
          <Footer></Footer>
      </div>
     </Router>
    );
  }
}

export default App;
