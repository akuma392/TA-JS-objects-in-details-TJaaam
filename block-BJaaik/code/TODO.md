## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)
123

```js
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    console.log(` I am ${this.name} and I am ${this.age} old and I can eat`);
  }
  sleep() {
    console.log(` I am ${this.name} and I am ${this.age} old and I can sleep`);
  }
  walk() {
    console.log(` I am ${this.name} and I am ${this.age} old and I can walk`);
  }
}

class Teacher extends Person {
  constructor(name, age, gender, institueName) {
    super(name, age, gender);
    this.institueName = institueName;
  }

  teach() {
    return `I am ${this.name} and I am ${this.age} and I can Teach. I teach in ${this.institueName}`;
  }
}
class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }

  createArt() {
    return `I am ${this.name} and I am ${this.age} and I am Artist in ${this.kind} field`;
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }

  play() {
    return `I am ${this.name} and I am ${this.age} old and I can play ${this.sportsName}.`;
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
}

let virat = new Cricketer("Virat Kholi", 31, "Male", "cricket", "India");

let Akshay = new Artist("Akshay Kumar", 52, "Male", "Actor");
```
