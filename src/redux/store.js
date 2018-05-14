/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, combineReducers } from 'redux';

// Reducers
import * as reducers from './reducers';

const configureStore = (initialState = {}) => createStore(
  combineReducers(reducers),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(),
);

export default configureStore;
