import { combineReducers } from 'redux';

// Reducers
import sessionReducer from './session/reducers';

export default combineReducers({
  session: sessionReducer,
});
