/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Redux
import { sessionSelectors } from '../redux/session';
import propTypes from '../redux/propTypes';

// Components
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';

// Styles
import './app.scss';

class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={createMuiTheme(this.props.theme)}>
          <main id="react-hue">
            <Navigation />
            <Route exact path="/" component={Home} />
          </main>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  theme: sessionSelectors.getTheme(state),
});

App.propTypes = {
  theme: propTypes.session.theme.isRequired,
};

export default hot(module)(connect(mapStateToProps)(App));
