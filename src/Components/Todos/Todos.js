import React, { Component } from 'react';
import Todo from './Todo/Todo';
import Message from '../Message/Message';
import AddTodoModel from '../AddTodoModel/AddTodoModel';


class Todos extends Component {

state = {
 todos: [{
    _id: 1, 
    title: 'Go for a morning walk and Playing Games',
    time: '12:30',
    uptime: '1',
    completed: false
  },
  {
    _id: 2,
    title: 'Dinner and some exercise',
    time: '12:30',
    uptime: '1',
    completed: false
  },
  {
    _id:3,
    title: 'College work',
    time: '12:30',
    uptime: '1',
    completed: false
  },
  {
  _id:4,
    title: 'College work',
    time: '12:30',
    uptime: '1',
    completed: false},
    
  ],
  showDeleteMessage: false,
  showAddMessage: false,
  showErrorMessage: false,
  open: false,
  errors: {}


};

showErrorMessage = () => {
    this.setState({showErrorMessage: true})
}

  handleDelete = (id) => {
    const todos = [...this.state.todos];
    const undeletedTodos = todos.filter(todo => todo._id !== id);
    this.setState({todos: undeletedTodos });
    this.setState({ showDeleteMessage: true });
    
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
  const newData = [...this.state.todos, data]
  this.setState({todos: newData});
  this.setState({ showAddMessage: true, open: false });
}else {
   this.showErrorMessage()
}
  
}

handleFormClose = () => {
  this.setState({ open: false });

}

handleClose = (event, reason) => {
  console.log(reason);
  if (reason === 'clickaway') {
    return;
  }

  this.setState({ showAddMessage: false, showDeleteMessage: false, showErrorMessage: false });
};

handleClickOpen = () => {
  this.setState({ open: true });
};


  render() {


    return (
      <div>
        {/* <WorkCompleted /> */}

       {this.state.todos.map(todo =>  <Todo key={todo._id} 
                                 todo={todo} 
                                 handleDelete={this.handleDelete}
                           />)}
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

export default Todos;
