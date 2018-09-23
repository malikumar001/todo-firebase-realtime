import React, { Component } from 'react';
import arrow from '../../assets/img.png';

class TodoBtn extends Component {
  render() {
    return (
      <div className="todoAdd-btn">
        <img alt="arrow-img" className="arrow-img" src={arrow} />
       <a onClick={this.props.openPopup} className="btn-floating pulse btn-large waves-effect waves-light blue"><i className="material-icons">comment</i></a>

      </div>
    );
  }
}

export default TodoBtn;
