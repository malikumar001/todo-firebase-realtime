import React, { Component } from 'react';
import arrow from '../../assets/img.png';
import './TodoBtn.css';

class TodoBtn extends Component {
  render() {
    return (
      <div>
        <div className="todoAdd-btn">

        <img alt="arrow-img" className="arrow-img " src={arrow} />
       <a onClick={this.props.openPopup} className="btn-floating pulse btn-large waves-effect waves-light blue"><i className="material-icons">comment</i></a>
        </div>
      <button onClick={this.props.openPopup} className="button button-add">Add todo</button>
      </div>
    );
  }
}

export default TodoBtn;
