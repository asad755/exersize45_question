// 41.	Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
var magician_name = ['Paul Daniels', 'David Blaine', 'Derren Brown', 'Harry Houdini', 'Penn & Teller'];
function show_magicians(magician) {
    for (var magic in magician) {
        console.log("".concat(magician[magic]));
    }
}
show_magicians(magician_name);
console.log(magician_name);
