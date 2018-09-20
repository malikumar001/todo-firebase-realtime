import React, { Component } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Todos from './Components/Todos/Todos';

import {connect} from 'react-redux';

import * as actions from './Actions/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faClock, faHourglassHalf, faTimes, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
// import Message from './Components/Message/Message';
// import Collapseable from './Components/Collapseable/Collapseable';

library.add(faBars, faClock, faHourglassHalf, faTimes, faAngleDown, faAngleUp)


class App extends Component {

  

  render() {
    return (
      <div>
        <Navbar /> 
       <Todos />
      </div>
    );
  }
}

export default connect(null, actions)(App);
