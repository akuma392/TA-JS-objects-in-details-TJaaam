// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


// let animalMethod ={
//     eat(){
//         alert(`I live in ${this.location} and I can Eat`)
//     },
//     changeLocation(newLocation){
//         return this.location = newLocation;
//     },
//     summary(){
//         return `I Live in ${this.location} and I have ${this.numberOfLegs}`
//     }
// };

// function animalGroup (location,numberOfLegs){

//     let animal = Object.create(animalMethod);

//     this.location =location;
//     this.numberOfLegs = numberOfLegs;

//     return animal;
// }

// // let animal1 = animalGroup("mumbai",3);


let animalMethod ={
    eat(){
        alert(`I live in ${this.location} and I can Eat`)
    },
    changeLocation(newLocation){
        return this.location = newLocation;
    },
    summary(){
        return `I Live in ${this.location} and I have ${this.numberOfLegs}`
    }
  };
  
    
  function animal(location,numberOfLegs){
      let animalGroup = Object.create(animalMethod);
      animalGroup.location = location;
      animalGroup.numberOfLegs = numberOfLegs;
      
  
     
      return animalGroup;
  
  }
  
// dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`


let dogMethods = {
    bark(){
        alert(`I am ${this.name} and I can bark`)
    },
    changeName(newName){
        this.name = newName;
    },
    changeColor(newColor){
        this.color = color;
    
    },
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }


}

Object.setPrototypeOf(dogMethods,animalMethod)


function dog(name,color,location,numberOfLegs){
    let dogGroup = Object.create(dogMethods);

    dogGroup.name =name;
    dogGroup.color = color;
    dogGroup.location = location;
    dogGroup.numberOfLegs = numberOfLegs;

    return dogGroup;

}


// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`




let catMethods = {
    meow(){
        alert(`I am ${this.name} and I can do meow meow`)
    },
    changeName(newName){
        this.name = newName;
    },
    changeColorOfEyes(newColor){
        this.color = color;
    
    },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes} color. I can also do meow meow`
    }


}

Object.setPrototypeOf(catMethods,animalMethod)


function cat(name,colorOfEyes,location,numberOfLegs){
    let catGroup = Object.create(dogMethods);

    catGroup.name =name;
    catGroup.colorOfEyes = colorOfEyes;
    catGroup.location = location;
    catGroup.numberOfLegs = numberOfLegs;

    return catGroup;

}