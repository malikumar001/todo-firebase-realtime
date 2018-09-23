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
                      <span class="new  badge" data-badge-caption="Completed"></span>
                       
                
                    </span>
                  ) : (
                      
                        <span id="title-todo">{todo.title}</span>
                      

                    )}
                </label>
                </div>
                    <div className="flexer"></div>
                { todo.completed ? (

                      <span onClick={() => this.props.handleDelete(todo.id)} class="new badge delete-on-complete #e53935 red darken-1" data-badge-caption="Remove"></span>

                ) 
                  
                  : <button onClick={() => this.props.handleClickOpen(todo)} class="button-edit button">Edit</button> }
                <div></div>
                { todo.completed ? undefined : <button onClick={() => this.props.handleDelete(todo.id)} class="button-delete button">Delete</button> }
                <div></div>
                





          </div>
          { todo.completed ? undefined : <div><Collapseable description={todo.description} /></div> }

        </div>
      </div>


    );
  }
}

export default connect(null, actions)(Todo);















// import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Todo.css';
// import Collapseable from '../../Collapseable/Collapseable';
// import { connect } from "react-redux";
// import * as actions from '../../../Actions/index';
// class Todo extends Component {
// state = {
//   completed: false
// }


// handleCheck = (e) => {

//   this.props.UpdateTodo(this.props.todo);
  
//     }


//   render() {
//     const todo = this.props.todo;
//     return (
//       <div className="todo-container">
//         <div className="sub-container" style={{background: todo.completed ? '#757575' : ''}}>
//           <div className="flex-container">
//             <div>

//               <p>
//                 <label>
               
//                   <input 
//                     type="checkbox"
//                     name="completed" 
//                     onChange={this.handleCheck}
//                     checked={this.props.todo.completed}
//                     className="filled-in blue-text text-darken-2" />


//                     {this.props.todo.completed ? ( 
//                     <span>
//                     <span id="title-todo-line">{todo.title}</span>
//                     <span class="new  badge" data-badge-caption="Completed"></span>
//                     </span>
//                  ) : (
//                     <span>
//                       <span id="title-todo">{todo.title}</span>
//                     </span>

//                  )}
//                 </label>
//               </p>
//            { todo.completed ? undefined : <a  onClick={() => this.props.handleClickOpen(todo)} className="waves-effect waves-light btn-small #ff8a80 red accent-1">edit</a> }
                            
//                   {todo.completed ?  (
                    
//                     <a onClick={() => this.props.handleDelete(todo.id)} class="waves-effect waves-light btn-small"><FontAwesomeIcon icon="trash-alt"/>Remove todo</a>
                    
//                     ) : ( 
//                   <span className="todo-setting">
//                   <span className="description"><Collapseable description={todo.description} /></span>
                   
//                   </span>
//                 ) }
//             </div>

//             <div className="flexer"></div>
//             <div onClick={() => this.props.handleDelete(todo.id)}><FontAwesomeIcon className="cross-icon" icon="times" /></div>


//           </div>



//         </div>
//       </div>


//     );
//   }
// }

// export default connect(null, actions)(Todo);
