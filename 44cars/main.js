// 45.	Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value 
// pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    args.forEach(function (arg, index) {
        if (index % 2 === 0 && typeof arg === "string") {
            var key = arg;
            var value = args[index + 1];
            car[key] = value;
        }
    });
    return car;
}
var myCar = createCar("Toyota", "Corolla", "color", "red", "year", 2022);
console.log(myCar);
