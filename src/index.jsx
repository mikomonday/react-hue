import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './utils/localStorage';
import configureStore from './redux/store';

// Redux
import { sessionSelectors } from './redux/session';

// Components
import App from './components/App';

// Store
const persistedState = loadState();
const store = configureStore(persistedState);
store.subscribe(throttle(() => {
  saveState({
    username: sessionSelectors.getUsername(store.getState()),
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
