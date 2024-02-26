// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
var userNames = [];
// check if the array has items inside it.
if (userNames.length > 0) {
    // iterate over the array
    for (var users in userNames) {
        if (userNames[users].includes("admin")) {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(userNames[users], ", thank you for logging in again."));
        }
    }
}
//  if the array is empty 
else {
    console.log("We need to find some users!");
}
