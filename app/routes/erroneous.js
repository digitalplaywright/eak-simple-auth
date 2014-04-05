var ErroneousRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
	model: function() {
	  return Ember.$.get('/auth-error');
	}
});

export default ErroneousRoute;