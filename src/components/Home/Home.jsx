import React from 'react';
import Typography from '@material-ui/core/Typography';

// Components
import RoomCarousel from './RoomCarousel';

// Styles
import './Home.scss';

export default class Home extends React.Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Typography variant="display3">
          Home
        </Typography>
        <Typography variant="subheading">
          6 lights on
        </Typography>
        <RoomCarousel />
      </div>
    );
  }
}
