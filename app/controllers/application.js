var Obj = Ember.Controller.extend({
  needs: ["login"],
  identification: Em.computed.alias("controllers.login.identification")
});

export default Obj;
