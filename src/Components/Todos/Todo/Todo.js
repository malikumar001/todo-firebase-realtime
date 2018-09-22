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

  this.props.UpdateTodo(this.props.todo);
  
    }


  render() {
    const todo = this.props.todo;
    return (
      <div className="todo-container">
        <div className="sub-container" style={{background: todo.completed ? '#757575' : ''}}>
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
                    <span>
                    <span id="title-todo-line">{todo.title}</span>
                    <span class="new  badge" data-badge-caption="Completed"></span>
                    </span>
                 ) : (
                    <span>
                      <span id="title-todo">{todo.title}</span>
                      
                    </span>

                 )}
                </label>
              </p>
                  
                  {todo.completed ?  (
                    
                    <a onClick={() => this.props.handleDelete(todo.id)} class="waves-effect waves-light btn-small"><FontAwesomeIcon icon="trash-alt"/>Remove todo</a>
                    
                    ) : ( 
                  
                  <span className="description"><Collapseable description={todo.description} /></span>) }
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
