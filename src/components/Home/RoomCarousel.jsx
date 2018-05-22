import React from 'react';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

export default class RoomCarousel extends React.Component {
  state: {
    slide: 1,
  };

  render() {
    return (
      <AutoRotatingCarousel>
        {this.generateRoomCards([])}
      </AutoRotatingCarousel>
    );
  }
}
