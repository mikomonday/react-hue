import types from './types';

const sessionReducer = (state = {
  testMsg: '',
}, action) => {
  switch (action.type) {
    case types.TEST_MSG:
      return {
        ...state,
        testMsg: action.payload.msg,
      };
    default:
      return state;
  }
};

export default sessionReducer;
