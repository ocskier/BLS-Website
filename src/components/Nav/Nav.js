import React from "react";

import {SideNav,SideNavItem} from 'react-materialize';

import './Nav.css';

const Nav = (props) => {
  
  return (
    <nav>
      <div className="nav-wrapper" style={StyleSheet.header}>
      <SideNav
         trigger={<i className="material-icons left" style={{marginTop: '25px',color:"white",marginLeft:40}}>menu</i>}
          options={{ closeOnClick: true }}
        >
          <SideNavItem />
          <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
          <SideNavItem href='#!second'>Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
        </SideNav>
          <p className="brand-logo center">{props.children}</p>
      </div>
    </nav>
  )
};

export default Nav;
