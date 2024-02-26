// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.


let change_guests_list = ['Ali Raza','Muhammad Zubair','Masadaq Ali Raza'];
console.log("\n");
console.log(`Guest "${change_guests_list[2]}" would not be able to come the dinner.`);
console.log("\n");
let index: number = change_guests_list.indexOf('Masadaq Ali Raza');
change_guests_list.splice(index,1, 'Yasir Noorani');
console.log(`${change_guests_list[0]}, You are invited for dinner at hotel.`);
console.log(`${change_guests_list[1]}, You are invited for dinner at hotel.`);
console.log(`${change_guests_list[2]}, You are invited for dinner at hotel.`);
console.log("\n");

console.log(`I am inviting total ${change_guests_list.length} persons on dinner.`);