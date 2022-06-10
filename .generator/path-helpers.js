const path = require('path');

module.exports = {
  templates: `${__dirname}/_templates`,
  src: () => __dirname,
  root: () => path.resolve(__dirname, '..'),
  packages: () => path.resolve(__dirname, '../packages')
};
