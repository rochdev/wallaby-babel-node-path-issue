module.exports = function(wallaby) {
  var path = require('path');
  
  return {
    files: [
      {pattern: 'src/**/*.js'}
    ],

    tests: [
      {pattern: 'test/**/*.spec.js'}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    env: {
      type: 'node',
      params: {
        env: 'NODE_ENV=test;NODE_PATH=' + path.join(wallaby.projectCacheDir, 'src')
      }
    }
  };
};
