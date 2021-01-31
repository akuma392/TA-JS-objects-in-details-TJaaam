// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.







// - Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

// - Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
// class Square{
//     constructor(side){
//        this._side = side;

       
//     }

//     set width(side){
//         let width = this._side;
        
//     }
//     get width(){
//         return this._side;
//     }
//     set height(side){
//         let height = this._side;
//     }
//     get height(){
//         return this._side;
//     }

//     description(){
//         alert(` the sqaure is ${this._side} X ${this._side}`)
//     }
// }

// let sq = new Square(20);

// - Create a method inside the class named `calcArea` that will return the area of the square.

// class Square{
//     constructor(side){
//        this._side = side;

       
//     }

//     set width(side){
//         let width = this._side;
        
//     }
//     get width(){
//         return this._side;
//     }
//     set height(side){
//         let height = this._side;
//     }
//     get height(){
//         return this._side;
//     }

//     description(){
//         alert(` the sqaure is ${this._side} X ${this._side}`)
//     }
//     calcArea(){
//         return this._side * this._side ;
//     }
// }

// let sq = new Square(20);

// - Create a `area` getter method using which we can get the area of the square.


class Square{
    constructor(side){
       this._side = side;

       
    }

    set width(side){
        let width = this._side;
        
    }
    get width(){
        return this._side;
    }
    set height(side){
        let height = this._side;
    }
    get height(){
        return this._side;
    }

    description(){
        alert(` the sqaure is ${this._side} X ${this._side}`)
    }
     calcArea(){
        return this._side * this._side ;
    }
    get area(){
        return this._side * this._side ;
    }
}

let sq = new Square(30);