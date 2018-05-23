import React from 'react';
import { connect } from 'react-redux';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

// Material UI
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

// Redux
import { groupsSelectors } from '../../redux/groups';

class RoomCarousel extends React.Component {
  state = {};
  // generateRoomCards = rooms => rooms.map((room) => {
  //   return (
  //     <Card key="" className="home-roomcard">
  //       <Typography variant="headline">
  //         room
  //       </Typography>
  //     </Card>
  //   );
  // })

  render() {
    return (
      <AutoRotatingCarousel>
        {}
      </AutoRotatingCarousel>
    );
  }
}

const mapStateToProps = state => ({
  rooms: groupsSelectors.getGroups(state),
});

export default connect(mapStateToProps)(RoomCarousel);
