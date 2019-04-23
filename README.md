## Schedulr

Schedulr is a day planner designed to let you organize your day based around what you need to get done.  Rather than creating appointments at specific times like a traditional calendar app, Schedulr allows you to create your task list first and figure out scheduling from there.

You can find a live version of the app on [Heroku](https://fathomless-forest-91982.herokuapp.com/) (app may be hibernated, so allow a few seconds for the frontend and backend to load.)

To use the app, simply sign in, select your wake and sleep times, and then start creating tasks.  Once your tasks are created, drag and drop them to the calendar.  

Schedulr was designed specifically for single-day planning, and as a supplement to your usual calendar.

Upcoming changes:

* Reset button
* Wake and Sleep times will persist in form
* Sign in and Login buttons should have active state
* Tasks names that are just whitespace should throw an error
* Phone/Tablet compatibility

### Installation

[Schedulr Frontend](https://github.com/Gonzodamus/schedulr-client)
[Schedulr Backend](https://github.com/Gonzodamus/schedulr-backend)

After forking and cloning down the client repo, change the api call  in services/api.js to `http://localhost:3000`, or whatever address you want to start the back-end on.  Then in the backend, under config/initializers/cors.rb set origins to `http://localhost:3001`, or wherever you want to run the client.

Start the backend with `rails s` and the front with `yarn start`.  Visit the frontend address and you should be up and running.
