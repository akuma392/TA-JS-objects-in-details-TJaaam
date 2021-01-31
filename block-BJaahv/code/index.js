// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// function to create object

// function getProjects(){
//     return this.noOfProjects;
// }
// function changeName(newName){
//     this.name = newName;
//     return this.name;

// }
// function incrementProject(value =1){
//     this.noOfProjects = this.noOfProjects + value;
//     return this.noOfProjects;

// }
// function decrementProject(value =1){
//     this.noOfProjects = this.noOfProjects - value;
//     return this.noOfProjects;

// }

// function createUser(name,id,noOfProjects = 0){
//     let user = {};
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;

//     user.changeName = changeName;
//     user.incrementProject = incrementProject;
//     user.decrementProject = decrementProject;
//     return user;

// }

// protypal pattern

// let userMethods = {
//      getProjects(){
//         return this.noOfProjects;
//     },
//      changeName: function(newName){
//         this.name = newName;
//         return this.name;
    
//     },
//      incrementProject (value =1){
//         this.noOfProjects = this.noOfProjects + value;
//         return this.noOfProjects;
    
//     },
//      decrementProject(value =1){
//         this.noOfProjects = this.noOfProjects - value;
//         return this.noOfProjects;
    
//     },
// }

// function createUser(name,id,noOfProjects = 0){
//     let user = Object.create(userMethods);
//     user.name = name;
//     user.id = id;
//     user.noOfProjects = noOfProjects;

   
//     return user;

// }

// Pseudoclassical pattern
// CreateUser.prototype = {
//     getProjects(){
//        return this.noOfProjects;
//    },
//     changeName: function(newName){
//        this.name = newName;
//        return this.name;
   
//    },
//     incrementProject (value =1){
//        this.noOfProjects = this.noOfProjects + value;
//        return this.noOfProjects;
   
//    },
//     decrementProject(value =1){
//        this.noOfProjects = this.noOfProjects - value;
//        return this.noOfProjects;
   
//    },
// }

// function CreateUser(name,id,noOfProjects = 0){
// //    let user = Object.create(userMethods);
//    this.name = name;
//    this.id = id;
//    this.noOfProjects = noOfProjects;

  
// //    return user;

// }

// class pattern

class CreateUser{
    constructor (name,id,noOfProjects=0){
        this.name = name;
   this.id = id;
   this.noOfProjects = noOfProjects;
    }
    getProjects(){
               return this.noOfProjects;
           };
            changeName(newName){
               this.name = newName;
               return this.name;
           
           };
            incrementProject (value =1){
               this.noOfProjects = this.noOfProjects + value;
               return this.noOfProjects;
           
           };
            decrementProject(value =1){
               this.noOfProjects = this.noOfProjects - value;
               return this.noOfProjects;
           
           };
}

let john = new CreateUser("John",10,5);
let Sara = new CreateUser("Sara", 1);