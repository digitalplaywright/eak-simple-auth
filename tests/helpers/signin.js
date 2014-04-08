
function signInUser(app, userPayload) {
  userPayload = $.extend({
    email: 'test_user@example.com',
    accessToken: 'please',
  }, userPayload || {});

  var session = app.__container__.lookup('ember-simple-auth:session');

  return session.authenticate('authenticator:application', {
    email: userPayload.email,
    accessToken: userPayload.accessToken,
  }).then(wait);
}

var registerAsyncHelper = Ember.Test.registerAsyncHelper;

export function install() {
 registerAsyncHelper('signInUser', signInUser);
}