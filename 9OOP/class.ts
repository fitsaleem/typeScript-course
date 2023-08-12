// class is blueprint of an objects or similer things
// declear the name of class in PascalCase.
// you can create multiple instance with the help of class.

//example 1


class Person{
    name:string;
    age: number;
    ID:number;
    isStudent:boolean;
    isTeacher:boolean;

    constructor(name:string,age:number,id:number,isStudent:boolean,isTeacher:boolean){

        this.name=name;
        this.age=age;
        this.ID=id;
        this.isStudent=isStudent;
        this.isTeacher=isTeacher;

    }


}

const person1=new Person("saleem",24,1,false,true);
const person2=new Person("Ali",15,33,true,false)
console.log(person1);
console.log(person2);
