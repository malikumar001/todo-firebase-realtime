import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from 'react-simple-collapsible-element';

import './Collapseable.css';

class Collapseable extends Component {

  render() {
    const data = [
      {
   
   title: <FontAwesomeIcon icon='angle-down' className='description-icon' />,
   content: <p>{this.props.description}</p>,
   contentStyle: { fontSize: '20px', color: '#fff', marginLeft: '10px' }, 
      }
    ];

    return (
      <div>


 <Collapsible data={data} />

      </div>
    );
  }
}

export default Collapseable;
