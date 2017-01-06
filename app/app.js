/* global loader */
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

loader.wrapModules = function (name, callback) {
  const callbackAsString = callback.toString();
  const appModules = callbackAsString.match(/App\.[^ ]+/);
  const noExports = callbackAsString.match(/exports\[/) === null;
  const appModuleName = appModules && appModules.length ? appModules[0] : null;

  if (noExports && appModuleName) {
    return function (exports) {
      callback(exports);

      // Fetch the window.App.FooBar module
      var module = appModuleName.split('.').reduce((memo, part) => memo = memo[part], window);

      exports["default"] = module;
    };
  } else {
    return callback;
  }
};

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
