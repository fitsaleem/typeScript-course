// class with inheritance

class Animals{

 name:string;

 constructor(name:string){
    this.name=name;
 }

 move(distanceInMeters:number){
    console.log(`${this.name} moved ${distanceInMeters}m.`);
 }

}

let dog=new Animals("Dog");
dog.move(10);



class Snake extends Animals{
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);  // Calls the move method on the parent class
    }
}

const snake= new Snake("snake");
snake.move(10);


export {}