// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.
function large_shirt(text, size) {
    if (text === void 0) { text = "I love TypeScript"; }
    if (size === void 0) { size = "Large"; }
    console.log("".concat(size, ",").concat(text));
}
function medium_shirt(text, size) {
    if (text === void 0) { text = "I love TypeScript"; }
    if (size === void 0) { size = "Medium"; }
    console.log("".concat(size, ",").concat(text));
}
function anySize_shirt(text, size) {
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("".concat(size, ",").concat(text));
}
large_shirt();
medium_shirt();
anySize_shirt('I love typeScript', 'Small');
