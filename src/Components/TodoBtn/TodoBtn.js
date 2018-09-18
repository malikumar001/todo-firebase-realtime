import React, { Component } from 'react';

import './TodoBtn.css';

class TodoBtn extends Component {
  render() {
    return (
      <div className="todoAdd-btn">
     
       <a onClick={this.props.openPopup} className="btn-floating pulse btn-large waves-effect waves-light blue"><i className="material-icons">comment</i></a>

      </div>
    );
  }
}

export default TodoBtn;
