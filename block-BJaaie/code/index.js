 
// //  Pseudoclassical Pattern
 
//  AnimalGroup.prototype={
//     eat(){
//         alert(`I live in ${this.location} and I can Eat`)
//     },
//     changeLocation(newLocation){
//         return this.location = newLocation;
//     },
//     summary(){
//         return `I Live in ${this.location} and I have ${this.numberOfLegs}`
//     }
//   };
  
    
//   function AnimalGroup(location,numberOfLegs){
//     this.location =location;
//     this.numberOfLegs = numberOfLegs;
  
//   }
  
// // dog




// DogGroup.prototype = {
//     bark(){
//         alert(`I am ${this.name} and I can bark`)
//     },
//     changeName(newName){
//         this.name = newName;
//     },
//     changeColor(newColor){
//         this.color = color;
    
//     },
//     summary(){
//         return `I am ${this.name} and I am of ${this.color} color. I can also bark`
//     }


// }

// Object.setPrototypeOf(DogGroup.prototype,AnimalGroup.prototype);


// function DogGroup(name,color,location,numberOfLegs){

//     AnimalGroup.call(this,location,numberOfLegs);

//     this.color =color;
//     this.name =name;


// }

// // cat


//  cat.prototype = {
//     meow(){
//         alert(`I am ${this.name} and I can do meow meow`)
//     },
//     changeName(newName){
//         this.name = newName;
//     },
//     changeColorOfEyes(newColor){
//         this.color = color;
    
//     },
//     summary(){
//         return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes} color. I can also do meow meow`
//     }


// }

// Object.setPrototypeOf(Cat.prototype,AnimalGroup.prototype)


// function Cat(name,colorOfEyes,location,numberOfLegs){

//     AnimalGroup.call(this,location,numberOfLegs);

//     this.name =name;
//     this.colorOfEyes =colorOfEyes;

// }


// class pattern




  
    
 


  class Animal{
      constructor(location,numberOfLegs){
        this.location =location;
        this.numberOfLegs = numberOfLegs;
      }
      eat(){
        alert(`I live in ${this.location} and I can Eat`)
    };
    changeLocation(newLocation){
        return this.location = newLocation;
    };
    summary(){
        return `I Live in ${this.location} and I have ${this.numberOfLegs}`
    }
  }
  
// dog







class Dog extends Animal{
    constructor(name,color,location,numberOfLegs){

        super(location,numberOfLegs);
        this.color =color;
        this.name =name;
    }
    bark(){
        alert(`I am ${this.name} and I can bark`)
    };
    changeName(newName){
        this.name = newName;
    };
    changeColor(newColor){
        this.color = newColor;
    
    };
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

// cat




class Cat extends Animal{
    constructor (name,colorOfEyes,location,numberOfLegs){

            super(location,numberOfLegs);
        this.name =name;
        this.colorOfEyes =colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do meow meow`)
    };
    changeName(newName){
        this.name = newName;
    };
    changeColorOfEyes(newColor){
        this.color = color;
    
    };
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes} color. I can also do meow meow`
    }
}