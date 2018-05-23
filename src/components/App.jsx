/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-rubik';
import PropTypes from 'prop-types';

// Redux
import { sessionSelectors, sessionConstants, sessionActions } from '../redux/session';
import propTypes from '../redux/propTypes';


// Components
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';

// Styles
import './app.scss';

// Themes
import defaultTheme from '../utils/themes/defaultTheme';

class App extends React.Component {
  componentDidMount() {
    this.props.getBridgeInfo();
  }

  createTheme = (theme) => {
    switch (theme) {
      case sessionConstants.themes.DEFAULT:
        return createMuiTheme(defaultTheme);
      default:
        return createMuiTheme(defaultTheme);
    }
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={this.createTheme(this.props.theme)}>
          <React.Fragment>
            <CssBaseline />
            <Navigation />
            <Route exact path="/" component={Home} />
          </React.Fragment>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  theme: sessionSelectors.getTheme(state),
});

const mapDispatchToProps = dispatch => ({
  getBridgeInfo: () => dispatch(sessionActions.getBridgeInfo()),
});

App.propTypes = {
  theme: propTypes.session.theme.isRequired,
  getBridgeInfo: PropTypes.func.isRequired,
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
