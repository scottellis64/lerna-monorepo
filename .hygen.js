const path_helpers = require("./.generator/path-helpers");
const react_helpers = require("./.generator/react-helpers");

module.exports = {
  helpers: {
    ...path_helpers,
    ...react_helpers
  }
};
