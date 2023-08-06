//1

function sum(number:number){
    return number+3;
}

console.log(sum(3));

//2
function user(name:string){
    return name.toUpperCase()
}
console.log(user("saleem"))


//3 

let customer=(name:string, age:number ,isValid:boolean=false, )=>{
return(`client name is ${name} and the age is ${age} ${isValid}`)
}

console.log(customer("saleem raza ",3))



// 4

let anotherfunction=(age:number):number=>{
    return age+3
    // return "hello" 
}

console.log(anotherfunction(4))

//5

let name=["saleem","ali","abbas"];

let names= name.map((value)=>{
    return `name is ${[value]}`
})

console.log(names)

// 6

let error=():void=>{
    console.log(error)
}

function fail(msg:string):never{
    throw new Error(msg);
}

export {}