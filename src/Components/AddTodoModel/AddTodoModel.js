import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TodoBtn from '../TodoBtn/TodoBtn';

import './AddTodoModel.css';


class AddTodoModel extends React.Component {
  state = {
    data: {
      title: '',
      description: '',
      id: ''

    }
  };

  onChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value, id: Math.floor(Math.random() * 100000342) + 'A*@DUDB' } });
  console.log(this.state.data)
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.data);
    console.log(this.state.data);
    this.setState({
      data: {
        title: '',
        description: '',
        id:  ''
      }
    })

  }

  render() {
    const { fullScreen } = this.props;
    const { data } = this.state;

    return (
      <div>

        <Dialog
          fullScreen={fullScreen}
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"What do you want to do today?"}</DialogTitle>





<form>

<div>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12 ">
          <i class="material-icons prefix blue-text">title</i>
          <input type="text" onChange={this.onChange} value={data.title} name="title" id="autocomplete-input" class="blue-text autocomplete" />
          <label for="autocomplete-input">Enter todo</label>
        </div>
      </div>
    </div>

    <div class="col s12">
      <div class="row">
        <div class="input-field col s12 ">
          <i class="material-icons prefix blue-text">description</i>
          <input type="text" onChange={this.onChange} value={data.description} name="description" id="autocomplete-input" class="blue-text autocomplete" />
          <label for="autocomplete-input">Enter short description</label>
        </div>
      </div>
    </div>

  </div>
</div>

<a  onClick={this.props.handleFormClose} className="waves-effect waves-light btn">Close</a>
<a type="submit"  onClick={this.handleAdd} className="waves-effect waves-light btn">Save</a>

</form>


        </Dialog>
        <TodoBtn openPopup={this.props.handleClickOpen} />
      </div>
    );
  }
}

AddTodoModel.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(AddTodoModel);


















