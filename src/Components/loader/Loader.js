import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

import './Loader.css';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
},
});

const Loader = ({classes})  =>  {
  
  return (
    <div className="loader">
      
      <CircularProgress className={classes.progress} size={75} style={{ color: purple[500] }} thickness={7} />

    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);