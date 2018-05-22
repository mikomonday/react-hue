import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class Home extends React.Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Typography variant="headline">
          Home
        </Typography>
      </div>
    );
  }
}
