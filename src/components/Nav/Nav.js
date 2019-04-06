import React from "react";
import {Link} from 'react-router-dom';

import './Nav.css';
import SideDrawer from "../SideDrawer";
// import Slide from '@material-ui/core/Slide';

class Nav extends React.Component {
  
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render () {
    
    const { clickOpen, children } = this.props;

    return (
      <nav>
        <div className="nav-wrapper" style={StyleSheet.header}>
          <i className="material-icons left" 
             style={{marginTop:30,color:"white",marginLeft:25}} 
             onClick={this.toggleDrawer('left',true)}>
              menu
          </i>
          <SideDrawer open={this.state.left} clickHandler={clickOpen} toggle={this.toggleDrawer} />
          <Link to="/"><p className="mylogo">{children}</p></Link>
        </div>
      </nav>
    )
  }
};

export default Nav;
