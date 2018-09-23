import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';


class AddTodoModelUpdate extends React.Component {
  
    state = {
        name: '',
        myData: []
  };

  onChange = (e) => {
    this.setState({ myData: { ...this.state.myData, [e.target.name]: e.target.value } });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

componentDidMount = () => {
    const { data } = this.props;


this.setState({ myData: data }, () => {
  console.log(this.state.myData, 'data');
}); 

}

   handleAdd = () => {
    this.props.handleUpdateAdd(this.state.myData);
    this.setState({
      myData: ''
    })

  }

  render() {
    const { fullScreen } = this.props;
    const {  myData } = this.state;
    
    return (
      <div>

        <Dialog
          fullScreen={fullScreen}
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Update Title and description!"}</DialogTitle>

          <form>

            <div>
              <div class="row">
                <div class="col s12">
                  <div class="row">
                    <div class="input-field col s12 ">
                      <i class="material-icons prefix blue-text">title</i>
                      <input  type="text" onChange={this.onChange} value={myData.title} name="title" id="autocomplete-input" class="blue-text autocomplete" />
                    </div>
                  </div>
                </div>

                <div class="col s12">
                  <div class="row">
                    <div class="input-field col s12 ">
                      <i class="material-icons prefix blue-text">description</i>
                      <input type="text" onChange={this.onChange} value={myData.description} name="description" id="autocomplete-input" class="blue-text autocomplete" />
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
          </div>
    );
  }
}

AddTodoModelUpdate.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(AddTodoModelUpdate);