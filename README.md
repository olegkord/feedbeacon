# feedBeacon
______________

## What is feedBeacon?

feedBeacon is an app that connects hungry but indecisive people with restaurants that need seats.
______________
### For the customer:

During account creation, the user selects a list of "likes." These "likes" can be food types (burgers, steak, etc.) restaurant qualities (sports bar, romantic, etc.) or activities (date night, night out, etc.).

After login, the likes are displayed on the user's page, and the user may add or remove them as he or she wishes. On a given user session, the user may select some "likes" and they will jump down to the bottom field and become a "need." Once all "needs" are selected, the user taps the "feed me" button and a notification is sent to all the restaurants who's tags match the user's "needs."
_______________
### For the restaurant:

Registering a restaurant is very similar to registering a user, but instead of a list of "likes" the restaurant specifies a list of "tags." On the restaurant's page, the restaurant may add or take away likes as it wishes.

During normal operation, the restaurant only needs to log in and listen for user requests. User requests get appended under the "reservations" field.
______________
### Technologies Used:

The app is hosted in two seperate repositories (see feedbeacon_front) for the front end.

Back end:
- Node.js with express
- Socket.io to handle instantaneous communication between customer and restaurant.
- Mongodb via Mongoose wrapper to store user data.
- User authentication with jsonwebtoken module.

Front end:
- Angular.js front-end application framework.
- State-based front-end template routing via ui-router module for angularjs.
- User authentication for template navigation.
- Front-end CSS created with materialize.css library for material design.
_______________
### Future work:

The application in the current state (Dec 18, 2015) is a proof of concept. Socket.io messages are successfully being sent from Users to Restaurants within the context of angularjs.

The immediate work that remains:
- The JSON that arrives via socket.io will need to be filtered based on restaurant tags.
- A restaurant must have a means of responding to the socket.io notification.
- There must exist infrastructure to select the first restaurant that may respond to the notification in a stable fashion.
- There is potential for creating a marketplace for the incoming customer requests.
- The user shall have an ability to be notified of where and when his or her reservation will be.
- The user shall have the ability to specify party size in a reservation.
- The user shall have the ability to cancel a reservation when it is made. 
