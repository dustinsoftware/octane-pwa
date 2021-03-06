'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'asset-cache': {
      include: ['assets/**/*', 'ag-grid.css'],
      manual: [
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'
      ]
    },
    'esw-cache-fallback': {
      patterns: [
        '/lighthouse-results\\.*'
      ],
    },
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')]
    },
    cssModules: {
      includeExtensionInModulePath: true,
    },
    prember: {
      urls: [
        '/',
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
