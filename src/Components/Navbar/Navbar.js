import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SideNav from './SideNav/SideNav';
import './Navbar.css';

class Navbar extends Component {
 
 
 
    state = {
    
        left: false
       
      };
    
      handletoggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
 
    render() {
    return (
      <div>
      <nav>
    <div className="nav-wrapper blue lighten">
    
    <ul id="nav-mobile" className="left sidedrawer">
        
        <li>
            <a onClick={this.handletoggleDrawer('left', true)}><FontAwesomeIcon icon="bars" /></a>
            </li> 
   </ul>

      <a href="umar.html"  className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

  <SideNav open={this.state.left} handletoggleDrawer={this.handletoggleDrawer}/>
      </div>
    );
  }
}

export default Navbar;
