"use strict";
//1
Object.defineProperty(exports, "__esModule", { value: true });
function sum(number) {
    return number + 3;
}
console.log(sum(3));
//2
function user(name) {
    return name.toUpperCase();
}
console.log(user("saleem"));
//3 
var customer = function (name, age, isValid) {
    if (isValid === void 0) { isValid = false; }
    return ("client name is ".concat(name, " and the age is ").concat(age, " ").concat(isValid));
};
console.log(customer("saleem raza ", 3));
// 4
var anotherfunction = function (age) {
    return age + 3;
    // return "hello" 
};
console.log(anotherfunction(4));
//5
var name = ["saleem", "ali", "abbas"];
var names = name.map(function (value) {
    return "name is ".concat([value]);
});
console.log(names);
