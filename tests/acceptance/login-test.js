var App;

module('Acceptances - SignIn', {
  setup: function(){
    App = startApp();
    this.xhr                = sinon.useFakeXMLHttpRequest();
    this.server             = sinon.fakeServer.create();
    this.server.autoRespond = true;
    sinon.spy(Ember.$, 'ajax');


    this.server.respondWith('POST', '/oauth/token', [
      200,
      { 'Content-Type': 'application/json' },
      '{"access_token":"secret token 2!","token_type":"bearer","expires_in":7200}'
    ]);

  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('authentication works correctly', function() {
  visit('/').then(function() {
    ok(exists('a:contains(Login)'), 'Login button is displayed when not authenticated');
    ok(!exists('a:contains(Logout)'), 'Logout button is not displayed when not authenticated');
  });

  visit('/login').fillIn('#identification', "foo@bar.com").fillIn('#password', "password").click('button[type="submit"]').then(function() {
    ok(!exists('a:contains(Login)'), 'Login button is not displayed when authenticated');
    ok(exists('a:contains(Logout)'), 'Logout button is displayed when authenticated');
  });
});