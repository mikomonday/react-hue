import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

// Styles
import './Navigation.scss';

export default class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <AppBar classes={{ root: 'nav' }} elevation={0} position="static" color="default">
        <Toolbar>
          <Avatar classes={{ root: 'nav-avatar' }}>
            <Icon>person</Icon>
          </Avatar>
          <Typography variant="title" color="inherit">
            React-Hue
          </Typography>
          <IconButton classes={{ root: 'nav-settings' }} aria-label="Settings">
            <Icon>tune</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
