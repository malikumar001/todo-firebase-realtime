import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Collapseable.css';

class Collapseable extends Component {

  render() {

    return (
      <div>
   
   <Collapsible triggerDisabled={false}
   
   transitionTime={200}
   transitionCloseTime={200}
   trigger={<FontAwesomeIcon icon='angle-down' className="description-icon" />}
   triggerWhenOpen={<FontAwesomeIcon icon='angle-up' className="description-icon" />}
>
        <p className="des">{this.props.description} 
        </p>
      </Collapsible>

      </div>
    );
  }
}

export default Collapseable;
