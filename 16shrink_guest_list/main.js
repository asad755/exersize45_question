// 17.	Shrinking Guest List: You just found out that your new dinner table won’t 
//      arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. 
//      Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
//      Each time you pop a name from your list, print a message to that person letting 
//      them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, 
//      letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
//      Print your list to make sure you actually have an empty list at the end of your program.
// ===================================================================================================
// Exercise-16 Code
// ====================================================================================================
var more_guests = ['Ali Raza', 'Muhammad Zubair', 'Masadaq Ali Raza'];
var start = more_guests.unshift("Gul Badshah"); // adds the element at the start of an array
var end = more_guests.push('Yasir Noorani'); // adds the element at the end of an array
var middle = Math.floor((more_guests.length - 1) / 2); // adds the element at the middle of an array
more_guests.splice(middle, 0, 'Najam');
// console.log(middle);
var index_number = more_guests.indexOf('Masadaq Ali Raza');
//  By using splice() method we can add guests.
more_guests.splice(index_number, 1, 'Atta Ul Ahsan');
console.log("".concat(more_guests[0], ", You are invited for dinner."));
console.log("".concat(more_guests[1], ", You are invited for dinner."));
console.log("".concat(more_guests[2], ", You are invited for dinner."));
console.log("".concat(more_guests[3], ", You are invited for dinner."));
console.log("".concat(more_guests[4], ", You are invited for dinner."));
console.log("".concat(more_guests[5], ", You are invited for dinner."));
console.log("Hi guys i found out that dinner table won\u2019t\n arrive in time for the dinner, and i have space for only two guests.");
console.log('\n');
//  ====================================================================================================
// Removing guests
// Remove guests from your list one at a time until only two names remain in your list. 
var shrink_guests_list = more_guests;
console.log("".concat(shrink_guests_list.pop(), ", I am sorry can\u2019t invite you to dinner."));
console.log("".concat(shrink_guests_list.pop(), ", I am sorry can\u2019t invite you to dinner."));
console.log("".concat(shrink_guests_list.pop(), ", I am sorry can\u2019t invite you to dinner."));
console.log("".concat(shrink_guests_list.pop(), ", I am sorry can\u2019t invite you to dinner."));
console.log('\n');
// Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("".concat(shrink_guests_list[0], ", Hi friend your are invited on dinner."));
console.log("".concat(shrink_guests_list[1], ", Hi friend your are invited on dinner."));
console.log('\n');
// Remove the last two names from your list, so you have an empty list. 
console.log("".concat(shrink_guests_list.pop()));
console.log("".concat(shrink_guests_list.pop()));
console.log('\n');
// Print your list to make sure you actually have an empty list at the end of your program.
console.log(shrink_guests_list);
