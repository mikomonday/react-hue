const getUsername = state => state.session.username;
const getTheme = state => state.session.theme;

const getBridges = state => state.session.bridges.bridges;
const getActiveBridge = state => state.session.bridges;

export default {
  getUsername,
  getTheme,
  getBridges,
  getActiveBridge,
};
