// 16.	More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
//     Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
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
console.log("\n");
console.log("Hi guys i found out that dinner table won\u2019t\n arrive in time for the dinner, and i have space for only two guests.");
