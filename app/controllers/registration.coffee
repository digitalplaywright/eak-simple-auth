Obj = Em.Controller.extend

  actions:
    register: ->
      _this = this
      data = @getProperties "email", "password", "password_confirmation"

      if not Em.isEmpty(data.email) and not Em.isEmpty(data.password)
        Em.$.ajax({
          method: "POST"
          url: "http://localhost:3000//users.json"
          dataType: 'json'
          data: {user: data}
        }).then( ((response) ->
          Em.run (->
            console.log "Registration Suceeded!"
            _this.get("session").setup response
            _this.send "registrationSucceeded", response
          )
        ), ((xhr, status, error)->
          Em.run (->
            _this.send "registrationFailed", xhr, status, error
            )
          )
        )

    registrationSucceeded: (response) ->
      console.log "Registration Succeeded: #{Em.inspect response}"

    registrationFailed: (xhr, status, error)->
      console.log "Registration Failed: #{error}"

`export default Obj`