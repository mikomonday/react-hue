/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, combineReducers } from 'redux';

// Reducers
import session from './session/reducers';

const rootReducer = combineReducers({
  session,
});

const configureStore = (initialState = {}) => createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(),
);

export default configureStore;
