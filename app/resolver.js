/* global requirejs */
import Resolver from 'ember-resolver';
import ModuleRegistry from 'ember-resolver/utils/module-registry';

function DasherizedModuleRegistry(entries) {
  var keys;

  this._entries = entries || requirejs.entries;

  // Convert underscore in module names to dashes
  keys = Object.keys(this._entries);
  keys.forEach((key) => {
    var dasherizedKey = key.replace(/_/g, '-');
    if (dasherizedKey !== key) {
      this._entries[dasherizedKey] = this._entries[key];
      delete this._entries[key];
    }
  });
}

DasherizedModuleRegistry.prototype = Object.create(ModuleRegistry.prototype);
DasherizedModuleRegistry.prototype.constructor = DasherizedModuleRegistry;

export default Resolver.extend({
  init: function() {
    this._super();

    if (!this._moduleRegistry || !(this._moduleRegistry instanceof DasherizedModuleRegistry)) {
      this._moduleRegistry = new DasherizedModuleRegistry();
    }
  },
});
