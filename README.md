# EAK Simple Auth

An example of using [Ember-Simple-Auth](https://github.com/simplabs/ember-simple-auth) with the
[Ember App Kit](https://github.com/stefanpenner/ember-app-kit).

This example will NOT work without a companion API server.


You can use our [Rails/Devise/Doorkeeper companion server](https://github.com/digitalplaywright/rails-token-auth),
**or any other oauth API server of your choice**.

## Getting Started

Follow the [Ember App Kit Getting Started Guide](http://iamstef.net/ember-app-kit/guides/getting-started.html) to setup and run this api client.

## Why a standalone API server?

A standalone API Server enables clear separation between the API and the Ember client. This makes:

* having multiple different clients trivial. For instance, keep supporting an old version for old browsers while taking advantage of new browser features in new versions.
* separate repositories and commit history for the clients and server, enabling workflow advantages
* serve the client as a static asset from cheap and extremely scalable CDNs. Not only should this be faster, but it should also be cheaper because you are no longer paying to launch extra servers to serve static assets.

However, it is not all peaches:

* The client must allow cross-origin resource sharing with a server on a different domain
* The server must allow API access from different origins

## Screenshots

![Login](/public/assets/images/login.png "Login")
![Sign Up](/public/assets/images/signup.png "Sign Up")
![Signed In](/public/assets/images/signedin.png "Signed In")

## License

Copyright 2014 by Michael Madrid under the MIT License (i.e. do with it what u wish)

