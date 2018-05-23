import { combineReducers } from 'redux';

// Reducers
import sessionReducer from './session/reducers';
import groupsReducer from './groups/reducers';
import lightsReducer from './lights/reducers';

export default combineReducers({
  session: sessionReducer,
  groups: groupsReducer,
  lights: lightsReducer,
});
