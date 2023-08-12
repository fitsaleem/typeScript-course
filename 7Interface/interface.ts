// example 1 of interface


interface User{
  readonly dbID: string,
           email: string,
           userID: number,
           googleID?: string,
           startTrial(): string,
        //    startTrial: ()=> string
           getCoupon(couponName: string,value:number): number
}


// reopening of the interface

interface User{
    githubID: string,
}

// you can inherient the interface

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

//now you can give the Admin or User in type

const saleem:Admin={
    dbID: "1",
    userID:23,
    role: "admin",
    email: "salem@gmal.com",
    githubID: "git@salej.com",
    startTrial: ()=>{
      return "start trial"
    },
    getCoupon:(name:"saleemdiscount",value:22)=>{
return 33;
    }


}

