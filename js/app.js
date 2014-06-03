App = Ember.Application.create();

App.ApplicationRoute = Ember.Route.extend({
  model: function(){
    return users;
  },

  events: {
    createUser: function() {
      var users = this.modelFor('application');
       var user = users.pushObject({id: users.length});
      this.transitionTo('editUser', user);
    }
  }

  // called when the user enters this route
  /*activate: function() {
    this.interval = setInterval(function(){
      var timer = this.get('controller.model.timer');
      this.set('controller.model.timer', timer + 1);
    }.bind(this), 1000);
  },

  // gets called when the user leaves the route
  deactivate: function(){
    clearInterval(this.interval);
  }*/

});

App.Router.map(function(){
  this.resource('user', { path: 'users/:user_id'});
  this.resource('editUser', { path: 'users/:user_id/edit' });
});

App.UserRoute = Ember.Route.extend({
  model: function(params){
    return users[params.user_id];
  }
});

App.EditUserRoute = Ember.Route.extend({
  model: function(params) {
    return users[params.user_id];
  },

  events: {
    save: function(){
      var user = this.modelFor('editUser');
      this.transitionTo('user', user);
    }
  }
});


var users = [
  {
    id: 0,
    first: 'Ryan',
    last: 'Florence',
    avatar: 'http://placehold.it/50x50"'
  },
  {
    id: 1,
    first: 'Tom',
    last: 'Dale',
    avatar: 'http://placehold.it/50x50"'
  },
  {
    id: 2,
    first: 'Yehuda',
    last: 'Katz',
    avatar: 'http://placehold.it/50x50"'
  }
];