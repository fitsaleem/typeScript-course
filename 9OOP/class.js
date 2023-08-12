// class is blueprint of an objects or similer things
// declear the name of class in PascalCase.
// you can create multiple instance with the help of class.
//example 1
var Person = /** @class */ (function () {
    function Person(name, age, id, isStudent, isTeacher) {
        this.name = name;
        this.age = age;
        this.ID = id;
        this.isStudent = isStudent;
        this.isTeacher = isTeacher;
    }
    return Person;
}());
var person1 = new Person("saleem", 24, 1, false, true);
var person2 = new Person("Ali", 15, 33, true, false);
console.log(person1);
console.log(person2);
