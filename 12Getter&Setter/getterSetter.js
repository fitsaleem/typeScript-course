//In TypeScript, getter and setter methods are used to control access to the properties of a class. They provide a way to change (set) or retrieve (get) the value of private properties of a class.
//setter cannot provide any return property
// example 1:
var Person = /** @class */ (function () {
    function Person(name, studentID) {
        this.name = name;
        this.studentID = studentID;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("age can not be negative");
            }
            else {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var student1 = new Person("saleem raza", 20);
student1.age = 20;
var student2 = new Person("ali abbas", 22);
student2.age = 2;
console.log(student1);
console.log(student2); // this will give error because age can not negative.
// example 2:
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        set: function (name) {
            var parts = name.split(' ');
            if (parts.length != 2) {
                throw new Error('Invalid name format: first last');
            }
            this._firstName = parts[0];
            this._lastName = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employe1 = new Employee();
employe1.fullName = "saleem raza abbas";
console.log(employe1.fullName);
