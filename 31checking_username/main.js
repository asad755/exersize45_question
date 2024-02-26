// 32.	Checking Usernames: Do the following to create a program that simulates how websites
//  ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
//     Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
//     If it has, print a message that the person will need to enter a new username. 
//     If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ['faizan', 'NAJAM', 'Zubair', 'Haroon', 'Ishfaq', 'Ali'];
var new_users = ['faizan', 'NAJAM', 'Gul', 'ali', 'Yasir', 'Obaid'];
for (var i = 0; i < new_users.length; i++) {
    // const intersection = current_users.filter((item) => new_users.includes(item));
    if (current_users.includes(new_users[i])) {
        console.log("The User ".concat(new_users[i], "  already exist, you need to enter a new username."));
    }
    else {
        console.log("The User ".concat(new_users[i], " is available"));
    }
}
