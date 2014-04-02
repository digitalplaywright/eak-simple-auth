export default Ember.SimpleAuth.Authenticators.OAuth2.extend({
  authenticate: function(credentials) {
    if(!Ember.isEmpty(credentials.access_token)) {
      return Ember.RSVP.resolve(credentials);
    } else {
      return this._super(credentials);
    }
  }
});