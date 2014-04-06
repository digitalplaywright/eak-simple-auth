
/*
  Make sure you've added Em.SimpleAuth to your project
  bower install ember-simple-auth
 */





var auth = {
  name: "authentication",
  initialize: function(container, application) {

    // the custom authenticator that initiates the authentication process with Facebook
    application.FacebookAuthenticator = Ember.SimpleAuth.Authenticators.Base.extend({
      restore: function(properties) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          if (!Ember.isEmpty(properties.accessToken)) {
            resolve(properties);
          } else {
            reject();
          }
        });
      },
      authenticate: function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          FB.getLoginStatus(function(fbResponse) {
            if (fbResponse.status === 'connected') {
              Ember.run(function() {
                resolve({ accessToken: fbResponse.authResponse.accessToken });
              });
            } else if (fbResponse.status === 'not_authorized') {
              reject();
            } else {
              FB.login(function(fbResponse) {
                if (fbResponse.authResponse) {
                  Ember.run(function() {
                    resolve({ accessToken: fbResponse.authResponse.accessToken });
                  });
                } else {
                  reject();
                }
              });
            }
          });
        });
      },
      invalidate: function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          FB.logout(function(response) {
            Ember.run(resolve);
          });
        });
      }
    });

    container.register('authenticators:facebook', application.FacebookAuthenticator);
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
