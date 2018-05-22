import types from './types';
import constants from './constants';

const sessionReducer = (state = {
  username: '',
  theme: constants.themes.DEFAULT,
}, action) => {
  switch (action.type) {
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };

    case types.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};

export default sessionReducer;
