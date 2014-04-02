
/*
  Make sure you've added Em.SimpleAuth to your project
  bower install ember-simple-auth
 */
var auth = {
  name: "authentication",
  initialize: function(container, application) {
    Em.SimpleAuth.setup(container, application, {
      crossOriginWhitelist: [window.ENV.server],
      routeAfterLogin: "index",
      routeAfterLogout: "login"
    });
    return Em.SimpleAuth.Authenticators.OAuth2.reopen({
      serverTokenEndpoint: window.ENV.server + "/oauth/token"
    });
  }
};

export default auth;
