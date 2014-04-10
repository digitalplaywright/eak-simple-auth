var LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
  authenticatorFactory: 'authenticator:oauth2-password-grant'
});

export default LoginController;