import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TodoBtn from '../TodoBtn/TodoBtn';
import TodoForm from '../Todos/TodoForm/TodoForm';

class AddTodoModel extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"What do you want to do today?"}</DialogTitle>


          <TodoForm />


          <DialogActions>

            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button onClick={this.handleClose} variant="contained" color="primary" autoFocus>
              Save
            </Button>

          </DialogActions>
        </Dialog>

        <TodoBtn openPopup={this.handleClickOpen} />
        
      </div>
    );
  }
}

AddTodoModel.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(AddTodoModel);