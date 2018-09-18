import React, { Component } from 'react';


class TodoForm extends Component {

    render() {

    return (
      <div>
    <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12 ">
          <i class="material-icons prefix blue-text">title</i>
          <input type="text" id="autocomplete-input" class="blue-text autocomplete" />
          <label for="autocomplete-input">Enter todo</label>
        </div>
      </div>
    </div>

     <div class="col s12">
      <div class="row">
        <div class="input-field col s12 ">
          <i class="material-icons prefix blue-text">description</i>
          <input type="text" id="autocomplete-input" class="blue-text autocomplete" />
          <label for="autocomplete-input">Enter short description</label>
        </div>
      </div>
    </div>

  </div>
      </div>
    );
  }
}

export default TodoForm;
