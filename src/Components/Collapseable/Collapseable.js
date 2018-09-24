import React, { Component } from 'react';
import Collapsible from 'react-simple-collapsible-element';

import './Collapseable.css';

class Collapseable extends Component {
state = {
    show: false
}

  render() {
    const data = [
      {
   
   title: <button onClick={() => this.setState({show: !this.state.show})} className='button-description button'>{this.state.show ? "Hide": "Show Description"}</button>,
   content: <p>{this.props.description}</p>,
   contentStyle: { fontSize: '20px', color: '#fff', marginLeft: '10px' }, 
      }
    ];

    return (
      <div onClick={() => this.setState({show: !this.state.show})}>


 <Collapsible data={data} />

      </div>
    );
  }
}

export default Collapseable;
