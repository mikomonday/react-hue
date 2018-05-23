import types from './types';

const getBridgeInfo = () => ({
  type: types.BRIDGE_INFO_REQUEST,
});

const setBridgeInfo = bridges => ({
  type: types.BRIDGE_INFO_SUCCESS,
  bridges,
});

const errorBridgeInfo = error => ({
  type: types.BRIDGE_INFO_FAILURE,
  error,
});

const setUsername = username => ({
  type: types.SET_THEME,
  username,
});

const setTheme = theme => ({
  type: types.SET_THEME,
  theme,
});

export default {
  getBridgeInfo,
  setBridgeInfo,
  errorBridgeInfo,
  setUsername,
  setTheme,
};
