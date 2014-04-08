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

//function makeEmail() { 
//    var strValues="abcdefg12345"; 
//    var strEmail = ""; 
//    var strTmp; 
//    for (var i=0;i<10;i++) { 
//        strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
//        strEmail = strEmail + strTmp; 
//    } 
//    strTmp = ""; 
//    strEmail = strEmail + "@"; 
//    for (var j=0;j<8;j++) { 
//        strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
//        strEmail = strEmail + strTmp; 
//    } 
//    strEmail = strEmail + ".com" 
//    return strEmail; 
//}  
//test('authentication works correctly', function() {
//  visit('/').then(function() {
//    ok(exists('a:contains(Login)'), 'Login button is displayed when not authenticated');
//    ok(!exists('a:contains(Logout)'), 'Logout button is not displayed when not authenticated');
//  });
//  visit('/login').fillIn('#identification', makeEmail()).fillIn('#password', 'this-is-wrong!').click('button[type="submit"]').then(function() {
//    ok(exists('a:contains(Login)'), 'Login button is displayed when not authenticated');
//    ok(!exists('a:contains(Logout)'), 'Logout button is not displayed when not authenticated');
//  });
//  visit('/login').fillIn('#identification', makeEmail()).fillIn('#password', 'password').click('button[type="submit"]').then(function() {
//    ok(!exists('a:contains(Login)'), 'Login button is not displayed when authenticated');
//    ok(exists('a:contains(Logout)'), 'Logout button is displayed when authenticated');
//  });
//});
