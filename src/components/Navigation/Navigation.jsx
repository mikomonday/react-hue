import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            React-Hue
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
