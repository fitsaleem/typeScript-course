// class products{
  
//     name: string;
//     type: string;
//     isPaid: boolean;
//     color: string;
//     id: number;

//     constructor(name:string,type:string,isPaid:boolean,id:number ,color:string){
//         this.name=name;
//         this.type=type;
//         this.isPaid=isPaid;
//         this.id=id
//     }





// }

// class shoes extends products{
//     shoeSize:number;

//     constructor(name:string,type:string,isPaid:boolean,id:number ,color:string,shoeSize:number){
//         super(name,type,isPaid,id ,color);
//         this.shoeSize=shoeSize;
//     }

// }

// let shoes1=new shoes("nike","imported",false,1,"black",40);

// console.log(shoes1);


// now same thing we can do wiht shorthand so it will reduce our code


class products{
  
    constructor(public name:string,public type:string,public isPaid:boolean,public id:number ,public color:string){
    }

}

class shoes extends products{

    constructor(name:string,type:string,isPaid:boolean,id:number ,color:string,public shoeSize:number){
        super(name,type,isPaid,id ,color);
    }

}

let shoes1=new shoes("nike","imported",false,1,"black",40);

console.log(shoes1);


