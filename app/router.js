var Router = Ember.Router.extend();

Router.map(function() {
  this.route("login");
  return this.route('registration');
});

export default Router;
