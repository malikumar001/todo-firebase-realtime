import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Todo.css';
import Collapseable from '../../Collapseable/Collapseable';
import { connect } from "react-redux";
import * as actions from '../../../Actions/index';

class Todo extends Component {
state = {
  completed: false
}


handleCheck = (e) => {
  debugger;

  this.setState({completed : !this.state.completed});
  debugger;
  
  this.props.UpdateTodo(this.props.todo, this.state.completed);
  debugger;
    }


  render() {
    const todo = this.props.todo;
    return (
      <div className="todo-container">
        <div className="sub-container">
          <div className="flex-container">
            <div>

              <p>
                <label>
                  <input 
                    type="checkbox"
                    name="completed" 
                    onChange={this.handleCheck}
                    checked={this.props.todo.completed}
                    className="filled-in blue-text text-darken-2" />
                 {this.props.todo.completed ? ( 
                    <span id="title-todo-line">{todo.title}</span>
                 ) : (
                    <span>
                      <span id="title-todo">{todo.title}</span>

                    </span>

                    


                 )}
                </label>
              </p>

                  <span className="description"><Collapseable description={todo.description} /></span>
            </div>

            <div className="flexer"></div>
            <div onClick={() => this.props.handleDelete(todo.id)}><FontAwesomeIcon className="cross-icon" icon="times" /></div>


          </div>



        </div>
      </div>


    );
  }
}

export default connect(null, actions)(Todo);
