import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TodoBtn from '../TodoBtn/TodoBtn';



class AddTodoModel extends React.Component {
  state = {
    data: {
      title: '',
      description: '',
      
    }
  };

  onChange = (e) => {
    this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAdd = () => {
    this.props.handleAdd(this.state.data);
    this.setState({
      data: {
        title: '',
        description: ''
      }
    })

  }

  render() {
    const { fullScreen } = this.props;

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
                      <input type="text" onChange={this.onChange} value={this.state.data.title} name="title" id="autocomplete-input" class="blue-text autocomplete" />
                      <label for="autocomplete-input">Enter todo</label>
                    </div>
                  </div>
                </div>

                <div class="col s12">
                  <div class="row">
                    <div class="input-field col s12 ">
                      <i class="material-icons prefix blue-text">description</i>
                      <input type="text" onChange={this.onChange} value={this.state.data.description} name="description" id="autocomplete-input" class="blue-text autocomplete" />
                      <label for="autocomplete-input">Enter short description</label>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <DialogActions>

              <Button onClick={this.props.handleFormClose} color="primary">
                Close
                </Button>
              <Button onClick={this.handleAdd} variant="contained" color="primary" autoFocus>
                Save
                </Button>

            </DialogActions>

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