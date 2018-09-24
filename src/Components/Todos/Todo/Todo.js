import React, { Component } from 'react';
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
        <div className="sub-container" style={{ background: todo.completed ? '#757575' : '' }}>

          <div className="flex-container">
          
          <div className="check-box">
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
                      <span class="new badge completed-batch" data-badge-caption="Completed"></span>
                       
                
                    </span>
                  ) : (
                      
                        <span id="title-todo">{todo.title}</span>
                      

                    )}
                </label>
                </div>
                    <div className="flexer"></div>
                { todo.completed ? (

                      <span onClick={() => this.props.handleDelete(todo.id)} className="new badge delete-on-complete #e53935 red darken-1" data-badge-caption="Remove"></span>

                ) 
                  
                  : <button onClick={() => this.props.handleClickOpen(todo)} className="button-edit button">Edit</button> }
                <div></div>
                { todo.completed ? undefined : <button onClick={() => this.props.handleDelete(todo.id)} class="button-delete button">Delete</button> }
               
          </div>
          { todo.completed ? undefined : <div><Collapseable description={todo.description} /></div> }

        </div>
      </div>


    );
  }
}

export default connect(null, actions)(Todo);
