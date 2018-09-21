import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Divider from '@material-ui/core/Divider';

import date from '../../Date/Date';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class SideNav extends React.Component {
  
    state = {
    
        left: false
       
      };
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };


  render() {
    const { classes } = this.props;

    const sideList = (
      <div style={{background: 'red'}} className={classes.list}>
        <List style={{color: '#fff', fontSize: '18px', textAlign: 'center'}}><FontAwesomeIcon
                  style={{ fontSize: '30px', marginRight: '10px' }}
                  icon="calendar-alt" />{`${date.monthDate} ${date.monthName} ${date.year}`}</List>
        <Divider />
      </div>
    );

    return (
      <div>

            
        <Drawer open={this.props.open} onClose={this.props.handletoggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.handletoggleDrawer('left', false)}
            onKeyDown={this.props.handletoggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        
      </div>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNav);





  