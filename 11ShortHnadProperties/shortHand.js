// class products{
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var products = /** @class */ (function () {
    function products(name, type, isPaid, id, color) {
        this.name = name;
        this.type = type;
        this.isPaid = isPaid;
        this.id = id;
        this.color = color;
    }
    return products;
}());
var shoes = /** @class */ (function (_super) {
    __extends(shoes, _super);
    function shoes(name, type, isPaid, id, color, shoeSize) {
        var _this = _super.call(this, name, type, isPaid, id, color) || this;
        _this.shoeSize = shoeSize;
        return _this;
    }
    return shoes;
}(products));
var shoes1 = new shoes("nike", "imported", false, 1, "black", 40);
console.log(shoes1);
