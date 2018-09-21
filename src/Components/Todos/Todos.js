import React, { Component } from 'react';
import Todo from './Todo/Todo';

import Message from '../Message/Message';
import AddTodoModel from '../AddTodoModel/AddTodoModel';

import './Todos.css';

import { connect } from "react-redux";
import * as actions from "../../Actions/index";
import Loader from '../loader/Loader';

class Todos extends Component {

  state = {
    array: [],
    showDeleteMessage: false,
    showAddMessage: false,
    showErrorMessage: false,
    // showDeleteMessage: false,
    open: false,
    errors: {}
  };

  showErrorMessage = () => {
    this.setState({ showErrorMessage: true })
  }

  handleDelete = (id) => {
    
console.log(id);
   this.props.RemoveTodo(id);
   
   this.setState({ showDeleteMessage: true });

    // const todos = [...this.state.todos];
    // const undeletedTodos = todos.filter(todo => todo._id !== id);
    // this.setState({ todos: undeletedTodos });

  }

  validate = (data) => {
    const errors = {};
    if (!data.title) errors.title = "Enter Todo title!";
    if (!data.description) errors.description = "Proper description is required!";

    return errors;
  }

  handleAdd = (data) => {

    const errors = this.validate(data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {

      const { addToDo } = this.props
      const id = this.props.data.length;

      addToDo(data, id);

      this.setState({ showAddMessage: true, open: false });


    } else {
      this.showErrorMessage()
    }

  }

  handleFormClose = () => {
    this.setState({ open: false });

  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ showAddMessage: false, showDeleteMessage: false, showErrorMessage: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };


  render() {
    this.props.fetchTodos();
    return (
      <div>
        <p className="heading">Record Your Tasks</p>

        {
          this.props.data.length !== 0 ? (

            this.props.data.map(todo => <Todo key={todo._id}
              todo={todo}
              handleDelete={this.handleDelete}
            />)


          ) : <Loader />
        }
        <AddTodoModel handleAdd={this.handleAdd} open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleFormClose={this.handleFormClose}

        />

        <Message showMessage={this.state.showDeleteMessage}
          handleClose={this.handleClose}
          removed="Todo Removed Successfully!"
        />


        <Message showMessage={this.state.showAddMessage}
          handleClose={this.handleClose}
          removed="Todo Added Successfully!"
        />

        <Message showMessage={this.state.showErrorMessage}
          handleClose={this.handleClose}
          removed="Please enter both TITLE and DESCRIPTION"
        />

       

      </div>
    );
  }
}


const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Todos);

