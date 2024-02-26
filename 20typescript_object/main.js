// 21.	They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    return Animal;
}());
var dog = new Animal("German Shepherd", 2);
var cat = new Animal("Persian", 1);
console.log(dog);
console.log(cat);
