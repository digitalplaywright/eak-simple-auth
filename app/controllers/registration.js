var RegistrationController = Em.Controller.extend({

  actions: {

    register: function() {

      var data, _this;
      _this = this;
      data  = this.getProperties("email", "password");

      return Em.$.ajax({

        method: "POST",
        url: window.ENV.server + "/users.json",
        dataType: 'json',
        data: {
          user: data
        }

      }).then((function(response) {

        return Em.run((function() {

          console.log("Registration Suceeded!");

          _this.get('session').authenticate('authenticator:oauth2-password-grant', {
            identification: data.email,
            password: data.password
          });

          return _this.send("registrationSucceeded", response);

        }));

      }), (function(xhr, status, error) {

        return Em.run((function() {
          return _this.send("registrationFailed", xhr, status, error);
        }));

      }));

    },

    registrationSucceeded: function(response) {
      return console.log("Registration Succeeded: " + (Em.inspect(response)));
    },

    registrationFailed: function(xhr, status, error) {

      var cur_error  = JSON.parse(xhr.responseText)["errors"];

      var cur_error_str = "<div class='regerror alert alert-danger'>";
      for (var key in cur_error) {
        if (cur_error.hasOwnProperty(key)) {
          cur_error_str = cur_error_str + key + " " + cur_error[key];
          cur_error_str = cur_error_str + "<br/>"
        }
      }

      cur_error_str = cur_error_str + "</div>"

      $(".regerror").replaceWith(cur_error_str);
      return console.log("Registration Failed: " + status);
    }

  }
});

export default RegistrationController;
