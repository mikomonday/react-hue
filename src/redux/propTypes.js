import PropTypes from 'prop-types';

const {
  array,
  bool,
  func,
  number,
  object,
  string,
  symbol,
  node,
  element,
  instanceOf,
  oneOf,
  oneOfType,
  arrayOf,
  objectOf,
  shape,
} = PropTypes;

export default {
  array,
  bool,
  func,
  number,
  object,
  string,
  symbol,
  node,
  element,
  instanceOf,
  oneOf,
  oneOfType,
  arrayOf,
  objectOf,
  shape,

  // State shape
  session: {
    username: string,
    theme: string,
    bridges: {
      requesting: bool,
      error: string,
      bridges: arrayOf(shape({
        id: string,
        internalipaddress: string,
      })),
      activeBridge: string,
    },
  },

  groups: {
    groups: array,
  },

  lights: {
    lights: array,
  },
};
