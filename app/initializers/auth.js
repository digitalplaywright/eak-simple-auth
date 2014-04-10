
/*
  Make sure you've added Em.SimpleAuth to your project
  bower install ember-simple-auth
 */
var auth = {
  name: "authentication",
  initialize: function(container, application) {
    var attributes = {
      crossOriginWhitelist: [window.ENV.server],
      routeAfterLogin: "index",
      routeAfterLogout: "login"
    };

    if(Ember.testing == true){
      attributes = Ember.merge({store: Ember.SimpleAuth.Stores.Ephemeral }, attributes );
    }

    Em.SimpleAuth.setup(container, application, attributes);
    return Em.SimpleAuth.Authenticators.OAuth2.reopen({
      serverTokenEndpoint: window.ENV.server + "/oauth/token"
    });
  }
};

export default auth;
