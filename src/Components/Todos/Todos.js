import React, { Component } from 'react';
import Todo from './Todo/Todo';


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
  }
  ]
};

  handleDelete = (id) => {
    const todos = [...this.state.todos];
    const undeletedTodos = todos.filter(todo => todo._id !== id);
    this.setState({todos: undeletedTodos });
}


  render() {


    return (
      <div>
        {/* <WorkCompleted /> */}

       {this.state.todos.map(todo =>  <Todo key={todo._id} 
                                 todo={todo} 
                                 handleDelete={this.handleDelete}
                           />)}
        

      </div>
    );
  }
}

export default Todos;
