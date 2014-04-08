
function signInUser(app, userPayload) {
  userPayload = $.extend({
    email: 'test_user@example.com',
    accessToken: 'please',
  }, userPayload || {});

  var session = app.__container__.lookup('ember-simple-auth:session');
  var store   = app.__container__.lookup('store:main');

  return session.authenticate('authenticator:application', {
    email: userPayload.email,
    accessToken: userPayload.accessToken,
  }).then(wait);
}

export function setEphemeralSessionStore(app) {
  var session   = app.__container__.lookup('ember-simple-auth:session');
  session.store = Ember.SimpleAuth.Stores.Ephemeral.create();

  app.deferReadiness();
  session.invalidate().then(function () {
    app.advanceReadiness();
  }, "invalidating test session");
}


var registerAsyncHelper = Ember.Test.registerAsyncHelper;

export function install() {
 registerAsyncHelper('signInUser', signInUser);
}