# burgers
* This is a virtual burger restaurant using a database to handle customer orders
## The Restaurant
* The customer will start by clicking the menu button
* The menu will appear using a modal
* Once the customer clicks on the burger they would like to order they are shown the order and prompted for a name
* The order then appears in the kitchen
* The user can click on the serve button if the order is cooked correctly
* They can also throw it away if it gets burned
* Serving the burger will move it into the dining room
* In the dining room the first button attached to the order allows the user to send it back to the kitchen if it's not good
* The second button allows the user to get a check and cash out
### What's going on behind the scene
* Throwing away the order in the kitchen if it gets burned and cashing out in the dining room will delete the order from the database
* Serving the order from the kitchen and sending it back from the dining room modify a field in the database which determines where the order lives
* The menu is hard coded into the front end JavaScript file and as time allows will eventually call another table in the database allowing the menu to be dynamic
