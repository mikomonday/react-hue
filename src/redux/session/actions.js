import types from './types';

const testMsg = msg => ({
  type: types.TEST_MSG,
  payload: {
    msg,
  },
});

export default {
  testMsg,
};
