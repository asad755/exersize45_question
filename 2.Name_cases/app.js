"use strict";
// 3.	Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name = "Muhammad ASSADIFTEKHAR";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
//  No inbuild method in JavaScript to titlecase the string. so we need to create the function to
//  do the job.
// Steps to create a function
// 1- convert the string to lowerCase.
// 2- split the single string into an array of strings.
// 3- create an array
// 4- loop through the array of strings and capitalize the first letter in every string.
// 5- return the title case string
function toTitleCase(str) {
    let lower = str.toLowerCase().split(' ');
    let char_array = [];
}
