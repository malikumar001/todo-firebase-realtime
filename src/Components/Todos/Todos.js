import React, { Component } from 'react';
import Todo from './Todo/Todo';

import Message from '../Message/Message';
import AddTodoModel from '../AddTodoModel/AddTodoModel';

import AddTodoModelUpdate from '../Update/AddTodoModelUpdate';


import './Todos.css';

import { connect } from "react-redux";
import * as actions from "../../Actions/index";
import Loader from '../loader/Loader';

class Todos extends Component {

  state = {
    array: [],
    updatedData: '',
    showDeleteMessage: false,
    showAddMessage: false,
    showErrorMessage: false,
    showUpdateMessage: false,
    openUpdateModel: false,
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

      addToDo(data);

      this.setState({ showAddMessage: true, open: false });


    } else {
      this.showErrorMessage()
    }

  }

  handleUpdateAdd = data => {
    console.log(data);
    const { addToDo } = this.props
    addToDo(data);
    this.setState({ showUpdateMessage: true, openUpdateModel: false });

  }

  handleFormClose = () => {
    this.setState({ open: false, openUpdateModel: false });

  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ showAddMessage: false, showDeleteMessage: false, showErrorMessage: false, showUpdateMessage: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };


  handleClickOpenUpdate = (data) => {
    this.setState({ openUpdateModel: true, updatedData: data });

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
              handleClickOpen={this.handleClickOpenUpdate}
              handleDelete={this.handleDelete}
            />)


          ) : <Loader />
        }
        <AddTodoModel handleAdd={this.handleAdd} open={this.state.open}

          handleClickOpen={this.handleClickOpen}
          handleFormClose={this.handleFormClose}

        />

        {this.state.openUpdateModel ? (<AddTodoModelUpdate open={this.state.openUpdateModel}
          data={this.state.updatedData}
          handleFormClose={this.handleFormClose}
          handleUpdateAdd={this.handleUpdateAdd}
        />) : undefined

        }

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

        <Message showMessage={this.state.showUpdateMessage}
          handleClose={this.handleClose}
          removed="Todo updated successfully!"
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

