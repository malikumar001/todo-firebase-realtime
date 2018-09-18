import React, { Component } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Todos from './Components/Todos/Todos';
import AddTodoModel from './Components/AddTodoModel/AddTodoModel';


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
       <h1 style={{color: "#fff"}}>Todo App:</h1>
       <Todos />
      </div>
    );
  }
}

export default App;
