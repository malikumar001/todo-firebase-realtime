import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Todo.css';
import Collapseable from '../../Collapseable/Collapseable';
class Todo extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <div className="todo-container">
        <div className="sub-container">
          <div className="flex-container">
              <div>

       <p>
      <label>
        <input type="checkbox" className="filled-in blue-text text-darken-2" />
        <span id="title-todo">{todo.title}</span>
      </label>
    </p>
              </div>
              <div className="flexer"></div>
              <div onClick={() => this.props.handleDelete(todo.id)}><FontAwesomeIcon className="cross-icon" icon="times"/></div>

              
          </div>

          <div className="flex-container timer-container">
           
            <span className="time"><FontAwesomeIcon className="text" icon="clock"/><span className="text">11:30am</span></span>
            <span className="time"><FontAwesomeIcon className="text" icon="hourglass-half"/><span className="text">2h</span></span>
          
             <span className="description"><Collapseable description={todo.description}/></span>
          </div>

          </div>
      </div>

      
    );
  }
}

export default Todo;
