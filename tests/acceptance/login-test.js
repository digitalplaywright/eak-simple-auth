var App;

module('Acceptances - SignIn', {
  setup: function(){
    App = startApp();
    require('appkit/tests/helpers/signin').setEphemeralSessionStore(App);

  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('see if we can sign in successfully', function(){
    console.log("App is:");

    var session = App.__container__.lookup('ember-simple-auth:session');

    console.log(session.authenticate);

    //alert(console.log(App) );
    session.authenticate('authenticator:application', {
      email:  'a@b.com',
      accessToken: 'something',
    }).then(function() {
        alert("fun");
    });

    ///signInUser(App);

    visit('/protected');

    andThen(function () {
      equal(currentPath(), 'protected' , "/we are not redirected when we are already signed in");
      equal(currentURL(), '/protected' , "/we are not redirected when we are already signed in");
    });
});
