
/*
  Make sure you've added Em.SimpleAuth to your project
  bower install ember-simple-auth
 */
var auth = {
  name: "authentication",
  initialize: function(container, application) {
    var attribtues = {
      crossOriginWhitelist: [window.ENV.server],
      routeAfterLogin: "index",
      routeAfterLogout: "login"
    };

    if(Ember.testing == true)
    {
      var attributes = Ember.merge({store: Ember.SimpleAuth.Stores.Ephemeral });
    }

    Em.SimpleAuth.setup(container, application,attributes);
    return Em.SimpleAuth.Authenticators.OAuth2.reopen({
      serverTokenEndpoint: window.ENV.server + "/oauth/token"
    });
  }
};

export default auth;
