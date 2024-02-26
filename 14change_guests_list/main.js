// 15.	Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
var change_guests_list = ['Ali Raza', 'Muhammad Zubair', 'Masadaq Ali Raza'];
// Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log("\n");
console.log("Guest \"".concat(change_guests_list[2], "\" would not be able to come the dinner."));
console.log("\n");
// getting the index number of the element
var index = change_guests_list.indexOf('Masadaq Ali Raza');
// Modify your list, replacing the name of the guest who 
// can’t make it with the name of the new person you are inviting.
// replacing the guest with new guest by using splice() method
change_guests_list.splice(index, 1, 'Yasir Noorani');
// Print a second set of invitation messages, one for each person who is still in your list.
console.log("".concat(change_guests_list[0], ", You are invited for dinner at hotel."));
console.log("".concat(change_guests_list[1], ", You are invited for dinner at hotel."));
console.log("".concat(change_guests_list[2], ", You are invited for dinner at hotel."));
console.log("\n");
console.log("Hello Friends i found a wider table for dinner so we can invite 3 more people.");
