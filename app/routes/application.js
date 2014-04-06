var Obj = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin, {
	actions: {
	  // override authenticateSession to instead of transitioning to a login route start authentication directly
	  authenticateFacebookSession: function() {
	    this.get('session').authenticate('authenticators:facebook', {});
	  }
	}

});

export default Obj;
