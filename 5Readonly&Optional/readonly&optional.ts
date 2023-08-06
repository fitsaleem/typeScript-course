type User={
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean; 
    phone?: number; // this ? mean its optional 
}

let myUser:User={
    _id: "123",
    name: "saleem",
    email: "saleem@gmail.com",
    isActive: false,
}

// myUser._id="14768"; you cna not do this because of its readonly
myUser.name="raza"


type Card={
    cardDetails: string;
}

type Address= User & Card &{
    address: string;
}

let newUser:Address={
    _id: "1323",
    name:"saleem",
    email: "jdjGmail.com",
    address: "karachi",
    cardDetails: "saleem raza",
    isActive: true,
    
}



export {}