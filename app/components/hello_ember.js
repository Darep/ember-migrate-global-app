App.HelloEmberComponent = Ember.Component.extend({
  didInsertElement: function () {
    this._super();
    console.log('Hello Ember!');
  }
});
