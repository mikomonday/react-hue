import types from './types';

const setUsername = username => ({
  type: types.SET_THEME,
  username,
});

const setTheme = theme => ({
  type: types.SET_THEME,
  theme,
});

export default {
  setUsername,
  setTheme,
};
