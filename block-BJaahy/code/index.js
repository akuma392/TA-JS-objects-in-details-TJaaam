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
// //     set height(side){
// //         let height = this._side;
// //     }
// //     get height(){
// //         return this._side;
// //     }

// //     description(){
// //         alert(` the sqaure is ${this._side} X ${this._side}`)
// //     }
// //     calcArea(){
// //         return this._side * this._side ;
// //     }
// // }

// // let sq = new Square(20);

// // - Create a `area` getter method using which we can get the area of the square.


// class Square {
//     constructor(side) {
//       this.width = side;
//       this.height = side;
//       this.numberOfTimes = 0;
//     }
  
//     description() {
//       alert(`the square is ${this.width} x ${this.height}`);
//     }
  
//     calcArea() {
//       return this.width * this.height;
//     }
//     get area() {
//         this.numberOfTimes++;
//       if (this.numberOfTimes >= 4) {
//         alert(`upper limit reached`);
//       } else {
//         return this.width * this.height;
//       }
//     }
  
//     set area(value) {
//       let side = Math.sqrt(value);
//       if (Number.isInteger(side)) {
//         this.width = side;
//         this.height = side;
//       } else {
//         alert(`${value} is noit valid input`);
//       }
//     }
  
//     static isEqual(sq1, sq2) {
//       return sq1.width * sq1.height === sq2.width * sq2.height;
//     }
//   }

//   let square1 = new Square(30);
  
//   let square2 = new Square(25);
class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value) {
      if (value.length < 5) {
        alert("Full name should be more than 5 characters");
      } else {
        this.firstName = value.split(" ")[0];
        this.lastName = value.split(" ")[1];
      }
    }
    nameContaines(str) {
      return str.toLowerCase().includes(this.firstName.toLowerCase()) || str.toLowerCase().includes(this.lastName.toLowerCase());
    }
  }
let user1 = new User("Arya","Stark");