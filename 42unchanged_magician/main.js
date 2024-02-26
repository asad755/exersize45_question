// 43.	Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array 
// of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("The Great ".concat(magician));
    }
    return great_magicians;
}
function show_magicians(magicians) {
    console.log(magicians.join(", "));
}
var magician_name = ['Paul Daniels', 'David Blaine', 'Derren Brown', 'Harry Houdini', 'Penn & Teller'];
// make the copy of magicians array using spread operator
var great_magicians = make_great(__spreadArray([], magician_name, true));
// function call
show_magicians(magician_name);
show_magicians(great_magicians);
