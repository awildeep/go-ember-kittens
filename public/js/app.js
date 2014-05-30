App = Ember.Application.create();

DS.RESTAdapter.reopen({
  namespace: 'api'
});

App.Kitten = DS.Model.extend({
  name: DS.attr('string'),
  picture: DS.attr('string')
});

App.Router.map(function() {
  this.route('create');
  this.route('edit', {path: '/edit/:kitten_id'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('kitten');
  },
  actions: {
      deleteKitten: function(kitten) {
        kitten.deleteRecord();
        kitten.save();
      }
  }
});

App.CreateController = Ember.Controller.extend({
  name: null,
  actions: {  
      save: function() {
          kitten = this.store.createRecord('kitten', {
            name: this.get('name')
          });
        kitten.save().then(function() {
          this.transitionToRoute('index');
          this.set('name', '');
        }.bind(this));
      }
  }
});

App.EditController = Ember.ObjectController.extend({
  actions: {  
      save: function() {
        var kitten = this.get('model');
        kitten.save().then(function() {
          this.transitionToRoute('index');
        }.bind(this));
      }
  }
});