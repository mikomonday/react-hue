import types from './types';
import constants from './constants';

const bridgeReducer = (state = {
  requesting: false,
  error: null,
  bridges: [],
  activeBridge: '',
}, action) => {
  switch (action.type) {
    case types.BRIDGE_INFO_REQUEST:
      return {
        ...state,
        requesting: true,
        error: null,
      };

    case types.BRIDGE_INFO_SUCCESS:
      return {
        ...state,
        requesting: false,
        bridges: action.bridges,
      };

    case types.BRIDGE_INFO_ERROR:
      return {
        requesting: false,
        bridges: [],
        error: action.error,
      };

    default:
      return state;
  }
};

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
      return {
        ...state,
        bridge: bridgeReducer(state.bridge, action),
      };
  }
};

export default sessionReducer;
