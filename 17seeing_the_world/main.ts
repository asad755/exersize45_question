// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.

let fav_places = ["Swat","Boyun Village","Hunza Valley","Yarkhun Valley","Phander Lake"];
console.log("Original: ", fav_places);
const alphabetical_order = fav_places.slice().sort();
console.log("Alphabetical Order: ", alphabetical_order);
// Show that your array is still in its original order by printing it.
console.log("Original: ", fav_places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
const reverse_alphabetical_order = fav_places.slice().sort().reverse();
console.log("Reverse Alphabetical Order: ", reverse_alphabetical_order);
// Show that your array is still in its original order by printing it again.
console.log("Original: ", fav_places);
// Reverse the order of your list. Print the array to show that its order has changed.
const reverse_order = fav_places.slice().reverse();
console.log("Reverse Order: ",reverse_order);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
const reverse_order_again = fav_places.slice().reverse().reverse();
console.log("Reverse Order Again: ",reverse_order_again);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
const again_alphabetical_order = fav_places.slice().sort();
console.log("Again Alphabetical Order: ", again_alphabetical_order);
// • Sort to change your array so it’s stored in reverse alphabetical order.
const again_reverse_alphabetical_order = fav_places.slice().sort().reverse();
console.log("Again Reverse Alphabetical Order: ",again_reverse_alphabetical_order);