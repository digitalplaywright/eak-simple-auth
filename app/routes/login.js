var  LoginRoute       = Ember.Route.extend({
  // clear a potentially stale error message from previous login attempts
  setupController: function(controller, model) {
    controller.set('errorMessage', null);
  },
  actions: {
    // display an error when authentication fails
    sessionAuthenticationFailed: function(error) {
      console.log(error);
      var message = JSON.parse(error).error;
      this.controller.set('errorMessage', message);
    }
  }
});

export default LoginRoute;
