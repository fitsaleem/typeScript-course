
let user:{
    name:string; username:string; email:string; isVerfied:boolean;
}={
name:"saleem",
username:"ali123",
email: "saleem@gmail.com",
isVerfied: true
}


function setUsers({name: string ,isPaid:boolean}){

}

// let users={name: "saleem raza",isPaid:true ,email:"helel@gmal.com"};
// setUsers(users); this will not givining error

setUsers({name: "saleem raza",isPaid:true});  // this will give error if we add extra value in ovject



// this is how we creat object in function in ts.
function createCourse():{name:string; price:number}{
return{name:"math",price:333}
}