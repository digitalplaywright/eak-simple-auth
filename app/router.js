var Router = Ember.Router.extend();

Router.map(function() {
  this.route("login");
  // protected route that's inaccessible without authentication
  this.route('protected');
  // route that will generate an authorization error
  this.route('erroneous');
  this.route('registration');
});

export default Router;
