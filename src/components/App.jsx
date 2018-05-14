/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { hot } from 'react-hot-loader';

// Components
import Navigation from './Navigation/Navigation';

class App extends React.Component {
  state = {};
  render() {
    return (
      <Navigation />
    );
  }
}

export default hot(module)(App);
