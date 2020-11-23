This is a RESTful API without any frameworks.  
API will be for an uptime monitoring application, using no NPM modules nor dependancies.  I will use a large chunk of the Node.js libraries

Tests will be included.

Monitoring app allows user to enter a URL that user wants monitored, and receive alerts when those resources “go down” or “come back up.”

Use is able to sign up, sing in, and edit their settings.

User will receive SMS up-time/down alerts via SMS rather then email.

Requirements:

- [ ] RESTful API that listens on a PORT and accepts incoming http request for POST, GET, PUT, DELETE and HEAD.
- [ ] API allows a client to connect, then create a new user, then edit and delete that user.
- [ ] The API allows a user to “sign in” which gives them a token that they can use for subsequent authenticated requests.
- [ ] The API allows the user to “sign to” which will invalidate their token.
- [ ] The API allows a signed-in user to use their token to create a new “check”.  Meaning a task for the system to check a given URL to see if it is up or down.  The user can define what up or down is.  Example, some websites are “up” if they produce a 200 status code.  While others might require anything that isn’t 500 status code
- [ ] Signed in user can edit or delete any of their checks. 
- [ ] A user has a limit of 5 checks.
- [ ] In the background the API performs all the checks at the appropriate time, and sends alerts to the users when a check changes its state from “up” to “down” or vice versa
- [ ] Checks run once a minutes

Everything in this app uses Node, but for sending SMS I have used Twilio.  A third-party library has not been created for this.  I have crafted the http request by hand.  I am trying to show that it is possible to use plain Node to do this, as well as show my mastery to a potential employer.  

Since this is a fairly simple program we will use the filesystem as a key-value store of JSON docs.  A real app would use a DB.  At a later date I may look at using MongoDB to complete the app.