var App;

module('Acceptances - SignIn', {
  setup: function(){
    App = startApp();

  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('see if we can sign in successfully', function(){

    signInUser(App);

    visit('/protected');

    andThen(function () {
      equal(currentPath(), 'protected' , "/we are not redirected when we are already signed in");
      equal(currentURL(), '/protected' , "/we are not redirected when we are already signed in");
    });
});
